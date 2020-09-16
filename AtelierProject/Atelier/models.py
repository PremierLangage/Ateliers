

from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q

from playexo.models import PL, Answer



class Atelier(models.Model):
	""" Represents information in a Atelier
	users			: liste des utilisateurs
	advancement		: liste des avancements des utilisateurs
	sectionsAtelier	: liste des sections
	summary			: dictionnaire regroupant toutes les informations de l'Atelier. 
					  Il sera mis a jour a chaque changement pour un acces plus rapide aux informations
	"""
	users = ManyToManyField(User, on_delete=models.CASCADE, verbose_name="list of users")
	advancement = ManyToManyField(Advancement, on_delete=models.CASCADE, verbose_name="list of PL")
	sectionsAtelier = ManyToManyField(SectionAtelier, on_delete=models.CASCADE, verbose_name="list of sectionAtelier")
	summary = models.JSONField(default=dict)
	
	def next_PL(self, user, nb_eval_max):
		""" Return the next exercise of the user
		
		Notes :
		section a un id donc on peut chercher une certaine question d'une section
		
		recupere l'id de la section et le num correspondant a l'exo
		si not(Atelier fini) alors
			si Atelier pas commence alors 
				next_exo = Qo(0)
			sinon si nb_eval_made() < nb_eval_max alors 
				next_exo = Eval(id_section)
			sinon si nb_eval_received() < nb_eval_max alors 
				next_exo = feedback(id_section)
			sinon si plus de Qf dans la section alors
				id_section ++
				next_exo = Qo(id_section)
			sinon 
				next_exo = Qf(id_section, current_exo)
			mettre a jour l'avancement
			lancer next_exo
		"""
		#a finir
		return
	
	def nb_eval_made(self, user, id_section):
		""" Return the number of evaluations made by the user"""
		#a finir
		return
	
	def nb_eval_received(self, user, id_section):
		""" Return the number of evaluations made by other users for the user """
		#a finir
		return
	
	def Qo(self, id_section):
		""" Return Qo of the section id_section"""
		return self.sectionsAtelier.filter(id=id_section)[0].Qo
	
	def Eval(self, id_section):
		""" Return eval/comp of the section"""
		if self.sectionsAtelier.filter(id=id_section).type_eval == 'eval':
			return self.sectionsAtelier.filter(id=id_section)[0].evaluation
		else:
			return self.sectionsAtelier.filter(id=id_section)[0].comparison
	
	def feedback(self, id_section):
		""" Return feedback of the section id_section"""
		return self.sectionsAtelier.filter(id=id_section)[0].feedback
	
	def Qf(self, id_section, current_exo):
		""" Return Qf of the section id_section
		
		Notes :
		current_exo - 3 : 
			le premier exo de Qf :
				-current_exo = 4
				-indice dans le tableau de Qf = 0
			donc le prochain exo:
				-current_exo = 5
				-indice dans le tableau de Qf = 1
			=> on passe du 1er exo current_exo au 2nd exo dans indice du tableau donc current_exo - 3
		"""
		return self.sectionsAtelier.filter(id=id_section)[0].Qf[current_exo - 3]
	
	def Atelier_finished(self, user, current_exo, id_section):
		""" Return True if Atelier is over else return False
		
		Atelier fini quand :
		-toutes les Qo de toutes les sections sont faites
		-toutes les eval/comp de toutes les sections sont faites
		-toutes les Qf de la derniere section sont faites
		-prof met fin a Atelier
		-eleve quitte Atelier
		"""
		#a finir
		return True
	
	def current_exercise(self, user):
		""" Return the number of the current exercise of the user
		current_exercise = 0 : Qo, 1 : eval, 2 : comp, 3 : feedback, >= 4 : Qf """
		return self.advancement.filter(user=user)[0].current_exercise
	
	def current_section(self, user):
		""" Return the id of the current section of the user """
		return self.advancement.filter(user=user)[0].current_section
		#return self.sectionsAtelier.filter(Q('Qo'=exo) | Q('feedback'=exo) | Q('Qf'=exo) | Q('Qo'=exo)).values_list('id', flat=True).get()
	
	def update_advancement(self, user, current_exo, next_exo):
		""" Met a jour l'avancement de user """
		self.advancement.filter(user=user, current_exercise=current_exo).update(current_exercise=next_exo)
	
	def save(self, *args, **kwargs):
		""" initialise l'advancement a None pour chaque utilisateur de l'Atelier """
		if self.pk is None:
			for u in self.users:
				Advancement.objects.create(user=u)
		super.save(*args, **kwargs)


class Advancement(models.Model):
	""" Represents the progress of the students on the exercises of the Atelier
	user			: eleve dont on va recuperer l'avancement
	current_section	: id de la section
	current_exercise: numero qui correspond a l'exercice en cours
		0 Qo
		1 eval
		2 comp
		3 feedback
		>= 4 Qf 
	"""
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	current_section = models.IntegerField(null=True, default=None)
	current_exercise = models.IntegerField(null=True, default=None)


class SectionAtelier(models.Model):
	""" Represents an open question, a type of evaluation, closed questions and a feedback
	Qo			: exercice platon de la question ouverte
	type_eval	: type d'evaluation de la question, peut etre 'eval' ou 'comp'
	evaluation	: si type_eval = 'eval' alors contient l'evaluation
	comparison	: si type_eval = 'comp' alors contient la comparaison
	Qf			: liste d'exercices platon de questions fermees que les eleves feront quand ils n'auront rien a faire
	feedback	: exercice platon de personnalisation du feedback de l'eval ou la comp
	"""
	Qo = models.ForeignKey(PL, null=False, on_delete=models.CASCADE)
	type_eval = models.CharField(null=False, max_length=100) 
	evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE)
	comparison = models.ForeignKey(Comparison, on_delete=models.CASCADE)
	Qf = ManyToManyField(PL, on_delete=models.CASCADE, verbose_name="list of close question")
	feedback = models.ForeignKey(PL, null=False, on_delete=models.CASCADE)


class Comparison(models.Model):
	""" Represents an evaluation where a student compare 2 answers from other students 
	answer1		: reponse 1 d'un eleve
	respondent1	: l'utilisateur de la reponse 1
	answer2		: reponse 2 d'un eleve
	respondent2	: l'utilisateur de la reponse 2
	evaluator	: l'utilisateur qui va faire/a fait la comparaison
	grade		: note de la cmparaison
	feedback	: retour de la comparaison (details des choix de evaluator)
	winner		: reponse gagnante de la comparaison 
	"""
	answer1 = models.ForeignKey(Answer, null=False, on_delete=models.CASCADE)
	respondent1 = models.ForeignKey(User, on_delete=models.CASCADE)
	answer2 = models.ForeignKey(Answer, null=False, on_delete=models.CASCADE)
	respondent2 = models.ForeignKey(User, on_delete=models.CASCADE)
	evaluator = models.ForeignKey(User, on_delete=models.CASCADE)
	grade = models.IntegerField(null=False)
	feedback = models.JSONField(default=dict)
	winner = models.ForeignKey(Answer, null=False, on_delete=models.CASCADE)


class Evaluation(models.Model):
	""" Represents an evaluation where a student evaluate an answer from an other student 
	answer		: reponse d'un eleve
	respondent	: l'utilisateur de la reponse
	evaluator	: l'utilisateur qui va faire/a fait l'evaluation
	grade		: note de l'evaluation
	feedback	: retour de l'evaluation (details des choix de evaluator)
	"""
	answer = models.ForeignKey(Answer, null=False, on_delete=models.CASCADE)
	respondent = models.ForeignKey(User, on_delete=models.CASCADE)
	evaluator = models.ForeignKey(User, on_delete=models.CASCADE)
	grade = models.IntegerField(null=False)
	feedback = models.JSONField(default=dict)

