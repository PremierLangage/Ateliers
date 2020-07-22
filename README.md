# ateliers
App de gestion d'atelier pour le projet platon 

L'atelier s'occupe de gérer les grilles critériées, les affectations de copies et les évaluations professeurs et étudiants.

Le professeur pourra créer une grille critériée comportant :
* plusieurs critères
* plusieurs niveaux pour un critère
* une description pour chaque critère
* une description et une note pour chaque niveau
* un minimum de 1 critère dans la grille
* un minimum de 2 niveaux pour un critère

Lors de la création de la grille, il est possible de supprimer un critère ou un niveau ainsi que t'intervertir 2 critères.  
Lors d'un ajout de critère, il est initialisé avec le même nombre de niveaux que le critère précédent.  
Lors d'un ajout de niveau, il est initialisé avec le même nombre de points plus 1 que le niveau précédent.

Pour une question donnée, le professeur pourra lui attribuer une grille critériée.

Lorsque les étudiants auront fini de répondre à une question, elle pourra si besoin être auto-évaluée et elle pourra être évaluée par les étudiants en fonction de sa grille.

Il y a 2 types d'évaluations : critériée et croisée.

### Evaluation critériée
Les étudiants recevront une copie à évaluer.  
Pour chaque critère de la grille critériée attribuée à l'exercice, ils devront choisir le niveau correspondant le mieux à la copie.  
Une note totale de la copie sera calculée et les résultats globaux des copies seront affichés (moyenne, min, max, écart type, etc).

### Evaluation croisée
C'est un tournoi avec les copies en demandant aux élèves de choisir la meilleure entre 2 copies.  
Les étudiants recevront deux copies à comparer.  
Pour chaque critère de la grille critériée attribuée à l'exercice, ils devront choisir la meilleure copie correspondant le mieux au critère.  
A la fin du tournoi, des résultats globaux seront affichés en fonction du nombre de matchs gagnés.
