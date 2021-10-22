// Patient
export default class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = []
        this.etatSante = etatSante
        this.traitement = this.traitement
    };
    // traitement = (medicament) => {
    //     if (argent == medicament) {
    //         console.log(`Voilà ${Patient.nom} à reçu son traitement iel est guerri`);
    //     }else{
    //         console.log(`${Patient.nom} n'a malheureusement pas l'argent pour s'acheter le medicament iel succombe a sa maladie`);
    //     }
    // }
    goTo = (depart, arriver) => {
        let dep = `${this.nom} est actuelement à ${depart} et se dirige vers ${arriver}`
        let arr = `${this.nom} est arriver à ${arriver}`
        console.log(dep);
        console.log(arr);
    }
    takeCare = (a) => {
        if(this.argent >= this.traitement[a]){
            console.log("voici ton traitement");
        }else{
            console.log("dsl tu n'a pas assez d'argent pour ton traintement");
        }
    }
    paye = (doctor) => {
        this.argent -= doctor.prix
    }
}