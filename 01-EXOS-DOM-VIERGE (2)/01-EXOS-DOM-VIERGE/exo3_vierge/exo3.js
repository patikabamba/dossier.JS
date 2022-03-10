function infosLiens() {
    console.log (document.querySelectorAll('li').length);
    console.log (document.querySelectorAll('a')[0]);
    console.log (document.querySelectorAll('a')[4]);
    
}

infosLiens();
function possede(_id, _class) { 
    
    let balise=document.getElementById(_id);
    if ( balise === null ) {
        return 'une erreur';        
    }
    else{
        return balise.classList.contains(_class)  
    }

     
}

console.log(possede("saxophone", "bois")); // Doit afficher true
console.log(possede("saxophone", "cuivre")); // Doit afficher false
console.log(possede("trompette", "cuivre")); // Doit afficher true
console.log(possede("contrebasse", "cordes")); // Doit afficher une erreur
    