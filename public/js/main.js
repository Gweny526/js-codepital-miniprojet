import Doctor from './doctor.js'
import Patient from './patient.js'
import Chat from './chat.js'
import Lieux from './lieux.js'

// instance de doctor
let doctor = new Doctor("Debugger", 0)
console.log(doctor);

// instance du chat 
let chat = new Chat('sphinx')
console.log(chat);


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
    
    console.log(dep);
    console.log(arr);
}
// sortir les personnages
let getOut = (a, sortir) => {
    // sortir.personnes.splice([0,1])
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
    getOut(el, pharmacie)
});