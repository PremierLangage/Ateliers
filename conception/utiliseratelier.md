
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

1) le cas d'utilisation préparer atelier a été terminé avec succès.
    --> tous les exercices sont testés (fonctionnels)
    --> nb max d'éval par élèves
    --> grille(s) critériée(s) créée(s) et assignée(s) à leur exercice correspondant
2) le groupe est défini (voir platon).
3) tous les utilisateurs sont connus de platon.



## Scénario Nominal

FIXME_[tout ce passe bien c'est le scénario parfait .]_

1.  Le professeur propose la première étape à chaque élève (présents) du groupe par la biais d'un cpltp.  
2.  L'élève intéragit avec l'étape:  
    Si l'étape est une exercice (ou une question ouverte), playexo gère les actions de l'utilisateur.  
    Si l'étape est une évaluation critériée :  
        2.1  Un exercice platon distribue les copies aux élèves présents selon les critères suivants :  
            2.1.1  L'élève ne doit pas retomber sur sa copie.  
            2.1.2  L'élève ne doit pas retomber sur une copie qu'il a déjà corrigée.  
            2.1.3  L'élève ne doit pas retomber sur une copie qui a été corrigée suffisamment de fois.  
            2.1.4  Si l'élève a corrigé suffisamment de copie (param nb max d'éval par élèves), aller en 2.4.  
        2.2  L'élève fait l'exercice correspondant à l'évaluation critériée, la copie donnée ainsi que la grille critériée.  
        2.3  Retour en 2.1 pour que les copies soient corrigées plusieurs fois.  
        2.4  Un exercice platon donne un feedback à chaque élève.  
        2.5  Un exercice platon affiche des résultats globaux.  
        2.6  Fin de l'évaluation critériée.  
    Si l'étape est une évaluation croisée :  
        2.1  Un exercice platon distribue les copies aux élèves présents. 
        2.2  L'élève fait l'exercice correspondant à l'évaluation croisée, la copie donnée ainsi que la grille critériée.  
        2.3  Retour en 2.1 pour que les copies soient comparées plusieurs fois.  
        2.4  Un exercice platon donne un feedback à chaque élève pour leur copie.  
        2.5  Un exercice platon affiche des résultats globaux.  
        2.6  Fin de l'évaluation croisée.  
3.  Retour en 2 sauf si plus d'étape.  
4.  Le système calcul la fin de l'atelier.  
5.  L'objectif est que les exercices soient faits pour une majorité des étudiants.  

Les élèves peuvent :
* demander à refaire un exercice  

Le professeur peut :
* voir son tableau de bord (avancement de l'atelier et des différents exercices le composant, résultats des exercices, nb élèves connectés)  
* mettre fin à un exercice  
* durant une évaluation critériée, il peut évaluer une copie (ajout d'une éval à la copie) qu'il aura choisit dans sa liste 
et il a un bouton qui dit à l'élève de recommencer son exercice.  
* choisir quels élèves referont leur exercice en fonction des demandes émises (bouton individuel + bouton qui sélectionne tous les élèves)  


### Extensions
FIXME Moins bien _[Document alternate flows and exceptions to the main success scenario. Extensions are branches from the main scenario, and numbering should align with the step of the success scenario where the branch occurs.]_

FIXME Indiquez dans quel point du scenario nominal le chemin alternatif démarre et ou il reprend.


## Post Conditions
### Conditions de succès 
FIXME _[Describe the end condition of the Use Case where the Primary Actor’s goal is satisfied]_

### Minimal Guarantees
FIXME _[Describe the guarantee or assurance that this Use Case provides to all Actors and Stakeholders to protect their interest regardless of whether the Use Case ends with success or failure.]_

### Conditions final en cas d'échec
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
