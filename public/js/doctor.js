import Patient from "./patient.js"
import Liux from "./lieux.js"

export default class Doctor {
    constructor(nom, argent) {
        this.nom = nom
        this.argent = argent
        this.prix = 50
        this.sAttente = []
        this.cabinet = []

    }
    diagnostique = (a) => {
        if (a.maladie == `mal indenté`) {
            let traitement = `ctrl+maj+f`
            let prix = 60
            this.argent += 50
            a.argent -= 50

            console.log(`la patient ${a.nom} à la maladie ${a.maladie} il doit prendre le ${traitement} qui coute ${prix}`);
            if (prix > a.argent) {
                console.log(`${a.nom} n'a malheureusement pas assez d'argent pour son traitement`);
                cimetiere.push(a.nom)
                a.etatSante = "fatality"
            }
            else{
                console.log(`${a.nom} regarde ce qui lui reste après avoir payer la consultation :  ${a.argent}€ pour payer le traitement qui coute ${prix}`);
                a.argent = a.argent - prix
                console.log(`après avoir tout payer il reste ${a.argent} ${a.nom} `);
                a.poche.push(traitement)
            }
        } else if (a.maladie == `unsave`) {
            let traitement = "saveOnFocusChange"
            let prix = 100
            this.argent += 50
            a.argent -= 50

            console.log(`le patient ${a.nom} à la maladie ${a.maladie} il doit prendre le ${traitement} qui coute ${prix}`);
            if (prix > a.argent) {
                console.log(`${a.nom} n'a malheureusement pas assez d'argent pour son traitement`);
                cimetiere.push(a.nom)
                a.etatSante = "fatality"
            }
            else{
                console.log(`${a.nom} regarde ce qui lui reste après avoir payer la consultation :  ${a.argent}€ pour payer le traitement qui coute ${prix}`);
                a.argent = a.argent - prix
                console.log(`après avoir tout payer il reste ${a.argent} ${a.nom} `);
                a.poche.push(traitement)
            }
            
        } else if (a.maladie == "404") {
            let traitement = `CheckLinkRelation`
            let prix = 35
            this.argent += 50
            a.argent -= 50

            console.log(`le patient ${a.nom} à la maladie ${a.maladie} il doit prendre le ${traitement} qui coute ${prix}`);
            if (prix > a.argent) {
                console.log(`${a.nom} n'a malheureusement pas assez d'argent pour son traitement`);
                cimetiere.push(a.nom)
                a.etatSante = "fatality"
            }
            else{
                console.log(`${a.nom} regarde ce qui lui reste après avoir payer la consultation :  ${a.argent}€ pour payer le traitement qui coute ${prix}`);
                a.argent = a.argent - prix
                console.log(`après avoir tout payer il reste ${a.argent} ${a.nom} `);
                a.poche.push(traitement)
            }
        } else if (a.maladie == `azmatique`) {
            let traitement = `Ventoline`
            let prix = 40
            this.argent += 50
            a.argent -= 50

            console.log(`le patient ${a.nom} à la maladie ${a.maladie} il doit prendre le ${traitement} qui coute ${prix}`);
            if (prix > a.argent) {
                console.log(`${a.nom} n'a malheureusement pas assez d'argent pour son traitement`);
                cimetiere.push(a.nom)
                a.etatSante = "fatality"
            }
            else{
                console.log(`${a.nom} regarde ce qui lui reste après avoir payer la consultation :  ${a.argent}€ pour payer le traitement qui coute ${prix}`);
                a.argent = a.argent - prix
                console.log(`après avoir tout payer il reste ${a.argent} ${a.nom} `);
                a.poche.push(traitement)
            }
        } else if (a.maladie == `syntaxError`) {
            let traitement = `f12+doc`
            let prix = 20
            this.argent += 50
            a.argent -= 50

            console.log(`le patient ${a.nom} à la maladie ${a.maladie} il doit prendre le ${traitement} qui coute ${prix}`);
            if (prix > a.argent) {
                console.log(`${a.nom} n'a malheureusement pas assez d'argent pour son traitement`);
                cimetiere.push(a.nom)
                a.etatSante = "fatality"
                // console.log(a.etatSante);
            }
            else{
                console.log(`${a.nom} regarde ce qui lui reste après avoir payer la consultation :  ${a.argent}€ pour payer le traitement qui coute ${prix}`);
                a.argent = a.argent - prix
                console.log(`après avoir tout payer il reste ${a.argent} ${a.nom} `);
                a.poche.push(traitement)
            }
        }

        //  else if (Patient.maladie == `saveOnFocusChange`) {
        //     console.log(`lae patient-e ${Patient.nom} à la maladie unsave`);
        // } else if (Patient.maladie == "CheckLinkRelation") {
        //     console.log(`lar patient-e ${Patient.nom} à la maladie 404 `)
        // } else if (Patient.maladie == "Ventoline") {
        //     console.log(`lae patient-e ${Patient.nom} est azmatique`);
        // } else if (Patient.maladie == `f12+doc`) {
        //     console.log(`le dossier du ${Patient.nom} à une syntaxError`);
        // }

    }
    patientIn = (patient) => {
        // Patient.nom.forEach(el => {
        //     Doctor.cabinet.push(el)
    
        // })
        // this.cabinet = this.cabinet.push(a)
        // console.log(`${a} entre dans le cabinet du docteur ${doctor.nom}`);
        console.log(`Entrer svp mr ${patient.nom}`);
        this.cabinet.push(patient.nom)
        // patient.etatDeSante = 'traitement'
        // console.log(patient.nom);
        // console.log(this.cabinet);
        
        

    }
    patientOut = (a) => {
        // cabinet = cabinet.filter(el => el !== nom)
        this.cabinet.splice([0])
        console.log(`${a.nom} merci de votre visite bonne journée`);
    }
}
let cimetiere = ("cimetiere", []);
let poche = []