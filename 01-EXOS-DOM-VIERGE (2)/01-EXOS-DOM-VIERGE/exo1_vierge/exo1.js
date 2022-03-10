/*
Exercice : afficher l'enfant d'un objet du DOM
*/
// Doit afficher le noeud h1
afficherEnfant(document.body, 1);


afficherEnfant(document.body.children[2].children[0], 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.head, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 10);
// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);






// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    if (noeud.nodeType ==3 || noeud.nodeType ==8 ) {
        return console.error('noeud incorrect');
    }
    if (indice<0 || indice>8 ) {
       return console.error('indice incorrect');
    }
        
        
    
    console.log(noeud.nodeType);
    console.log(noeud.childNodes[indice]);
}
    
