afficherEnfant(document.body,1);


afficherEnfant(document.body.children[2].children[0],1);

afficherEnfant(document.head, -1);

afficherEnfant(document.body,9);

afficherEnfant(document.body.childNodes[0],0);

function afficherEnfant(noeud, indice){
    if (noeud.nodeType==3 ||noeud.nodeType==8  ) {
     
        return console.error('type de noeud incorrect!') 
        
    }
    let nbEnfant= document.body.childNodes.length
    
    if (indice<0 || indice>nbEnfant) {
return console.error('indice incorrect!')        
    }

console.log(noeud.childNodes[indice]);

}