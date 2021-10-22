// pour tout les lieux

export default class Lieux {
    constructor(nom, patients){
        this.nom = nom
        this.patients = patients
    }
}
let salleDAttente = new Lieux("salle d'attente", []);
let cabinet = new Lieux ("cabinet", []);
let pharmacie = new Lieux("pharmacie", []);
let cimetiere = new Lieux("cimetiere", []);

