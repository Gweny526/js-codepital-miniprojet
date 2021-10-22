export default class Chat{
    constructor(race){
        this.race = race
    }
    miaul(){
        setTimeout(() => {
            console.log("miaouuuu!");
        }, 2000);
    }
}
let chat = new Chat('sphinx')
