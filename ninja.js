class Ninja {
    constructor(name, health, speed, strength,){
        this.name = name,
        this.health = health,
        this.speed = 3,
        this.strength = 3;
    }

    sayName(){
        console.log(`The ninja's name is ${this.name}`);
    }

    showStats(){
        console.log(`Ninja's strength is: ${this.strength}, the speed is: ${this.speed}, the health is: ${this.health}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name}'s health increased by ten points, and is now ${this.health}`);
    }


}

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
