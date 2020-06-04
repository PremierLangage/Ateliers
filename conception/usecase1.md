

# Cas d'utilisation N° 1 :  utiliser l'atelier 

Niveau Haut niveau

##  Description

Les étudiant de façon synchrones suive les étapes de l'atelier.  Chaque étape consiste en soit un exercice, soit une question ouverte (ou les deux), soit une evaluation.


> **Niveau** :Haut niveau, 
> **Déclencheur** : L'enseignant ouvre l'atelier pour un groupe donné.
> **Acteur Primaire**:  Student  
> **Acteurs secondaires**: Teacher
> **Parties Prenantes concernées** : -   
 
 
## Preconditions

1) le cas d'utilisation préparer atelier a été terminé avec success.
    --> tout les exercices sont testés (fonctionnels)
2) le groupe est définie (voir platon).
3) tout les utilisateurs sont connus de platon.



## Scenario Nominal

FIXME_[tout ce passe bien c'est le scénario parfait .]_

1.  le système propose a chaque élève du groupe (présents) la première étape.  
2.  l'élève intéragit avec l'étape:
    Si l'étape est une exercice (ou une question ouverte) playexo gère les actions de l'utilisateur.
    Si l'étape est une évaluation
    2.1  <<dialogue entre l'élève et le logiciel>>
3.  retour en 2 sauf si plus d'étape.
4.  le système calcul la fin de l'atelier 
 
5. l'objectif c'est les exercices sont fait pour une majorité des étudiants. 


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
