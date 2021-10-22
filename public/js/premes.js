// crée une function chat 
// log ('miaule')
// settimeout 

// Patient
class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etatSante = etatSante
    };
    traitement = (medicament) => {
        if (argent == medicament) {
            console.log(`Voilà ${Patient.nom} à reçu son traitement iel est guerri`);
        }else{
            console.log(`${Patient.nom} n'a malheureusement pas l'argent pour s'acheter le medicament iel succombe a sa maladie`);
        }
    }
    goTo = (nom) => {
        this.lieu = nom
        console.log(`${this.nom} se déplace ver ${nom}`);
    }
    takeCare = () => {

    }
    paye = (doctor) => {
        this.argent -= doctor.prix
    }
}
let patient1 = new Patient("Marcus", "mal indenté", 100, "vide", "malade")
let patient2 = new Patient("Optimus", "unsave", 200, "vide", "malade")
let patient3 = new Patient("Sangoku", 404, 80, "vide", "malade")
let patient4 = new Patient("DarthVader", "azmatique", 110, "vide", "malade")
let patient5 = new Patient("Semicolon", "syntaxError", 60, "vide", "malade")
// juste pour être sur que ça fonctionne
console.log(patient1);
console.log(patient2);
console.log(patient3);
console.log(patient4);
console.log(patient5);

// salle d'attente
let salleDAttente ={
    nom : `salle d'attente`,
    espace : [patient1, patient2, patient3, patient4, patient5]
}

// doctor
class Doctor {
    contructor(nom, argent) {
        this.nom = nom
        this.argent = argent
        this.prix = 50
        this.cabinet = [chat, patient1, patient2, patient3, patient4, patient5]

    }
    diagnostique = (Patient) => {
        if (Patient.maladie == `ctrl+maj+f`) {
            console.log(`lae patient-e ${Patient.nom} à la maladie mal indenté`);
        } else if (Patient.maladie == `saveOnFocusChange`) {
            console.log(`lae patient-e ${Patient.nom} à la maladie unsave`);
        } else if (Patient.maladie == "CheckLinkRelation") {
            console.log(`lar patient-e ${Patient.nom} à la maladie 404 `)
        } else if (Patient.maladie == "Ventoline") {
            console.log(`lae patient-e ${Patient.nom} est azmatique`);
        } else if (Patient.maladie == `f12+doc`) {
            console.log(`le dossier du ${Patient.nom} à une syntaxError`);
        }

    }
    patientIn = (Patient) => {
        Patient.nom.forEach(el => {
            Doctor.cabinet.push(el)
    
        })
        console.log(patient1);

        
    }
    patientOut = (cabinet) => {
        cabinet = cabinet.filter(el => el !== nom)
    }
}

// Doctor.patientIn(patient1)

let doctor = new Doctor("Debugger", 0, "cabinet")
console.log(doctor);

// pharmacie
let Pharmacie = {
    traitement1 : {
        nom : `ctrl+maj+f`,
        prix : 60
    },
    traitement2 : {
        nom : `saveOnFocusChange`,
        prix : 100
    },
    traitement3 : {
        nom : `CheckLinkRelation`,
        prix : 35
    },
    traitement4 : {
        nom : `Ventoline`,
        prix : 40
    },
    traitement5 :{
        nom : `f12+doc`,
        prix : 20
    }
}

// Récit
console.log(`dans la salle d'attente il y ${Doctor.cabinet.length}`);