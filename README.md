Ce projet consiste à implémenter une website qui permet de gérer les cours 
"courses managment system".
1/ j'ai crée un fichier data.json pour pouvoir remplir des données statiques 
contenant les utilisateurs Ex : ( "firstName": "Mahdi",
      "lastName": "Ouali",
      "nickname": "Mahdouch",
      "birthday": "10-10-1997",
      "gender": "male",
      "email": "mahdiouali1@gmail.com",
      "password": "pass1",
      "role": "student" )
et les cours Ex :  ( "name": "java",
      "description": "programming language OOP",
      "category": " programming laguages ",
      "subject": "subj 1",
      "startTime": "8 AM ",
      "endTime": "9 AM",
      "studentsCount": 3) 
ces données nous permet de connecter et d'afficher et trier les cours ...

2/ J'ai crée le premier composant login j'ai utiliser le boot strap pour une animation
et affichage plus clair...(* insertion de username et password/ 
*verification d'existance du username avec le ^password correct en parcourant Static data
avec la boucle For et on navigate sur la page des cours... 

3/  la page http://localhost:4200/courses contient tous les cours dans un tableau 
jai utilisé *Ngfor pour laffichage du tableau ainsi que le filtrage 
le navbar contient les boutons (" edit profile" qui permet de nous envoyer a un formulaire 
pour modifier les coordonnées d'un utilisateur ( aussi une animation avec bootstrap....) 
et le bouton "add courses" qui permet de nous envoyer a une autre page qui
contient un formulaire pour ajouter un cours ... 
et la bouton logout our déconnecter.
et la bare 'what do you looking for ? pour trier les cours .