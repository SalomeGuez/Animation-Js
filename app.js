// On recupère le boutton d'ID "addBtn"
// on le stcok dans la variable et const pcs constant
const addBtn = document.getElementById('addBtn');

// sert a definir le corps de la fonction
addBtn.addEventListener('click' , () => {
    // on crée un élément "div" qu'on stocke dans une variable square
    const square = document.createElement('div');

    // Ajouter du style à l'élement
     square.classList.add('square');

     // Rajouter un gestionnaire d'élément sur le carré

     square.addEventListener('click', () => {
         square.remove();
     });

    // Le rajouter à la liste de carrés
    const squareList = document.querySelector('.square-list');
    // l'insérer dans la liste
    squareList.appendChild(square);
});


