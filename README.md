# ateliers
App de gestion d'atelier pour le projet platon 

L'atelier s'occupe de gerer les grilles criterisees, les affectations de copies et les evaluations professeurs et etudiants.

Pour une question donnee, un professeur pourra creer une grille criterisee pouvant comporter :
-plusieurs criteres
-plusieurs niveaux pour un critere
-une note pour chaque niveau de chaque critere
Lors d'un ajout de critere, il devra etre initialise avec le meme nombre de niveau que le critere precedent.

Lorsque les etudiants auront fini de repondre a une question, elle pourra si besoin etre auto-evaluee et elle pourra etre evaluee par les etudiants en fonction de sa grille.

Pour une copie donee, les etudiants devront attribuer une note pour chaque critere de la grille.
Une note totale de la copie sera calculee et les resultats globaux des copies seront affiches (moyenne, min, max, ecart type, etc).

Il y aura aussi une possibilite de faire un tournoi avec les copies en demandant aux eleves de choisir la meilleure entre 2 copies (critere que le professeur pourra donner).
A la fin du tournoi, des resultats globaux seront affiches en fonction du nombre de matchs gagnes.
