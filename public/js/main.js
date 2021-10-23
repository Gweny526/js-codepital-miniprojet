import Doctor from './doctor.js'
import Patient from './patient.js'
import Chat from './chat.js'
import Lieux from './lieux.js'

// instance de doctor
let doctor = new Doctor("Debugger", 0)
console.log(doctor);
let diagnostique = [
    {maladie : "mal indenté", traitement : "ctrl+maj+f"},
    {maladie : "unsave", traitement : "saveOnFocusChange"},
    {maladie : "404", traitement : "checkLinkRelation"},
    {maladie : "azmatique", traitement : "ventoline"},
    {maladie : "syntaxError", traitement : "f12+doc"}
]
let traitements = [
    {traitement : "ctrl+maj+f" , prix : 60},
    {traitement : "saveOnFocusChange" , prix : 100},
    {traitement : "checkLinkRelation" , prix : 35},
    {traitement : "ventoline" , prix : 40},
    {traitement : "f12+doc" , prix : 20}
]
let consultation = 50

// instance du chat 
let chat = new Chat('sphinx')
console.log(chat);

// _____________________________________________________________

// instance de patient
let patient1 = new Patient("Marcus", "mal indenté", 100, "vide", "malade")
let patient2 = new Patient("Optimus", "unsave", 200, "vide", "malade")
let patient3 = new Patient("Sangoku", 404, 80, "vide", "malade")
let patient4 = new Patient("DarthVader", "azmatique", 110, "vide", "malade")
let patient5 = new Patient("Semicolon", "syntaxError", 60, "vide", "malade")

let personnes = [patient1, patient2, patient3, patient4, patient5]
// juste pour être sur que ça fonctionne
console.log(personnes);

// déplacer les personnage 
let goTo = (a, depart, arriver) => {
    let dep = `${a.nom} est actuelement à ${depart.nom} et se dirige vers ${arriver.nom}`
    let arr = `${a.nom} est arriver à ${arriver.nom}`
    // arriver.personnes.push()
    console.log(dep);
    console.log(arr);
}
// payer
let paye = (a, prix) => {
    a.argent = a.argent - prix
    console.log(`${a.nom} a paye la consultation ${prix}`);
    doctor.argent += 50
    personnes.argent -= 50
    console.log(`le portefeuille du medecin ${doctor.nom} ce rempli et continient maintenant ${doctor.argent}`);
}

// prendre le traiteemnt
let takeCare = (a) =>{
    if (a.traitements > a.argent){
        console.log(`voici votre médicament bon rétablissemnt!`);
        a.poche = a.traitements
        console.log(`${Patient.nom} à maintenant son traitement dans sa poche et rentre chez lui`);
    } else{
        console.log(`tu as ${a.argent} et ton traitement coute ${a.traitements} tu n'as donc malheureusement pas assez`);
        console.log(`il n'as pas sont traitement il n'y a donc rien dans sa poche`);
        console.log(`tu es mort et te trouve actuellement au ${cimetiere.nom}`);
        // cimetiere.personnes.push(personnes.nom)
        // pharmacie.personnes.splice(1)
        // console.log(`patient à la pharmacie : ${pharmacie.Patient}`);
        // console.log(`patient au cimetière ${cimetiere.personnes}`);
    }
}

// instance de lieux
let salleDAttente = new Lieux("salle d'attente", []);
let cabinet = new Lieux ("cabinet", []);
let pharmacie = new Lieux("pharmacie", []);
let cimetiere = new Lieux("cimetiere", []);
let lieux = [salleDAttente, cabinet, pharmacie, cimetiere]
console.log(lieux);


// début du script 
// premier patient
// faire un foreach des patient

personnes.forEach(el => {
    doctor.patientIn(el)
    chat.miaul()
    console.log(doctor.cabinet);
    doctor.diagnostique(el)
    doctor.patientOut(el)
    goTo(el, salleDAttente, pharmacie)
    takeCare(el)
    // takeCare(el)


    // getOut(el, pharmacie)
    console.log(`______Next_____`);
})