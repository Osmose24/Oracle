const GTA = 50000;// Type : number : FCFA
let Epargne = 4000;
let semaine = 1;
while (Epargne < GTA) {
    console.log(semaine);
    Epargne += 4000;
    semaine++;
}   
console.log("le nombre de semaines qu'il nous faut pour atteindre ou dépasser le montant de GTA : " + semaine);