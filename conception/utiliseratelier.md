
# Cas d'utilisation N° 1 :  utiliser l'atelier 

Niveau Haut niveau

##  Description

Les étudiants de façon synchrones suivent les étapes de l'atelier.  
Chaque étape consiste d'un des trois composants suivants :  
- un exercice,
- une question ouverte // rendu de fichier,  
- une évaluation.


> **Niveau** :Haut niveau,  
> **Déclencheur** : L'enseignant ouvre l'atelier pour un groupe donné.  
> **Acteur Primaire**:  Student  
> **Acteurs secondaires**: Teacher  
> **Parties Prenantes concernées** : -   


## Préconditions

1. Le cas d'utilisation préparer atelier a été terminé avec succès.  
    1.1. Tous les exercices sont testés (fonctionnels).  
    1.2. L'exercice platon définissant tous les paramètres d'une évaluation est créé.  
    1.3. Grille(s) critériée(s) créée(s) et assignée(s) à leur exercice correspondant :  
    &nbsp; 1.3.1 Création d'une grille critériée grâce à un exercice platon -> l'étape peut être faite 0 ou plusieurs fois.  
    &nbsp; 1.3.2 Choisir une grille critériée dans la base de donnée parmi celle du professeur et l'assigne à une évaluation (exo platon).  
2. Le groupe est défini (voir platon).  
3. Tous les utilisateurs sont connus de platon.  



## Scénario Nominal

1. Le professeur ouvre l'asset d'une activité.  
2. Le système propose la bonne étape à l'élève en fonction de ce qu'il lui reste à faire par ordre de priorité :  
    a. Si l'élève a un exercice de comparaison qu'il n'a pas déjà fait, allez en 3.1.  
    b. Le système fait tourner l'exercice de comparaison qui distribue les copies aux élèves présents. Si le système affecte deux copies à l'élève alors il doit faire une comparaison de ces deux copies d'élèves de l'exercice a. Allez en 3.2.  
    c. Si les copies des élèves ont été comparées suffisamment de fois, l'élève peut avoir son feedback. Allez en 3.3.  
    d. Si l'élève a un exercice d'évaluation qu'il n'a pas déjà fait, allez en 3.4.  
    e. Le système fait tourner l'exercice d'évaluation qui distribue les copies aux élèves présents selon les critères suivants :  
    * L'élève ne doit pas retomber sur sa copie.  
    * L'élève ne doit pas retomber sur une copie qu'il a déjà corrigée.  
    * L'élève ne doit pas retomber sur une copie qui a été corrigée suffisamment de fois.  
    * L'élève ne doit pas corriger plus d'un certain nombre de copie (paramètre d'évaluation).  
    
    Si le système affecte une copie à l'élève alors il doit faire une évaluation de cette copie d'élève de l'exercice d. Allez en 3.5.  
    f. Si les autres élèves ont évalué la copie de l'élève suffisamment de fois et que l'élève a également évalué un nombre suffisant de copies, il peut avoir son feedback. Allez en 3.6.  
    g. Si l'élève a un exercice fermé à faire, allez en 3.7.  
    h. Si l'élève n'a plus rien à faire, allez en 3.8.  
    Il faut vérifier les conditions dans l'ordre (*a* à *h*) à chaque fois car quand un élève fait un exercice d'évaluation ou un exercice de comparaison, il crée de la donnée pour les autres élèves et une potentielle évaluation ou comparaison à faire.  
3. L'élève intéragit avec une des étapes suivantes :  
    3.1. Exercice de comparaison : playexo gère les actions de l'utilisateur.  
    3.2. Comparaison : l'élève fait l'exercice correspondant à la comparaison, la copie d'élève donnée ainsi que la grille critériée.  
    3.3. Feedback de comparaison : le système fait tourner l'exercice qui donne un feedback à chaque élève.  
    3.4. Exercice d'évaluation : playexo gère les actions de l'utilisateur.  
    3.5. Evaluation : l'élève fait l'exercice correspondant à l'évaluation, la copie donnée ainsi que la grille critériée.  
    3.6. Feedback d'évaluation : le système fait tourner l'exercice qui donne un feedback à chaque élève.  
    3.7. Exercice fermé : playexo gère les actions de l'utilisateur.  
    3.8. Plus rien à faire -> trouve une occupation non définie.  
4. Retour en 2. sauf si le professeur met fin à l'atelier.  
5. Le système calcule la fin de l'atelier.  


Les élèves peuvent :
* demander à refaire un exercice  

Le professeur peut :
* voir son tableau de bord (avancement de l'atelier et des différents exercices le composant, résultats des exercices, nb élèves connectés)  
* mettre fin à un exercice  
* durant une évaluation critériée, il peut évaluer une copie (ajout d'une éval à la copie) qu'il aura choisit dans sa liste 
et il a un bouton qui dit à l'élève de recommencer son exercice (tableau de bord).  
* choisir quels élèves referont leur exercice en fonction des demandes émises (bouton individuel + bouton qui sélectionne tous les élèves) (tableau de bord)  



### Extensions
FIXME Moins bien _[Document alternate flows and exceptions to the main success scenario. Extensions are branches from the main scenario, and numbering should align with the step of the success scenario where the branch occurs.]_

FIXME Indiquez dans quel point du scenario nominal le chemin alternatif démarre et ou il reprend.


## Post Conditions
### Conditions de succès 
Les exercices sont faits pour une majorité des étudiants. 

### Minimal Guarantees
Les élèves peuvent faire les exercices fermés de l'activité.

### Conditions finales en cas d'échec
FIXME _[Describe the end condition that results if the Primary Actor fails to accomplish his goal.]_


FIXME _les variables suivantes sont optionnelles._

### Frequence
FIXME _[Indicate how often the use case is expected to occur. This information aids designers and developers in understanding capacity requirements.]_   
### Besoins Spéciaux (optionel)  
FIXME _[Describe any additional factors that impact the execution of the use case. These could be environmental, regulatory, organizational or market-driven in nature.]_  
### Performance  
### Security  
### Usability / Accessibility  
### Other  

##  Problèmes et étapes suivantes  
FIXME _[Note any issues related to the definition of this use case that will require clarification prior to development. Also list any follow-up work that needs to be done prior to sign-off on the use case.]_  

FIXME définir ce qui pose problème dans la description **actuelle** du cas d'utilisation.  
FIXME vous pouvez ajouter ici un lien vers une issue github ou un carte de projet github.

TBR
