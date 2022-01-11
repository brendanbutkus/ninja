const Ninja = require ('./ninja');

class Sensei extends Ninja{
    constructor(name){
        super(name, 200,10,10);
        this.wisdom = 10;
    } 
    speakWisdom(){
        const message = super.drinkSake();
        console.log("wise quote")

    }
}

const newSensei = new Sensei("Miyagi");
newSensei.speakWisdom();