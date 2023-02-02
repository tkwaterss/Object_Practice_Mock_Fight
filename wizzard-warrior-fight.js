//Object oriented practice
class Wizard {
    constructor(name, age, armor, power) {
        this.class = 'wizard';
        this.name = name;
        this.age = age;
        this.armor = armor;
        this.power = power;
        this.health = 100;
        this.specialCount = 1;
    }
    lightningBolt(opponent) {
        console.log(`Wizard ${this.name} attacks ${opponent.class} ${opponent.name} with Lightning Bolt for ${this.power - opponent.armor}`);
        opponent.takeDamage(this.power);
    }
    fireBall(opponent) {
        console.log(`Wizard ${this.name} attacks ${opponent.class} ${opponent.name} with Fire Ball for ${this.power * 1.5 - opponent.armor}`);
        opponent.takeDamage(this.power * 1.5)
    }
    fullHeal(opponent) {
        if (this.specialCount <= 0) {
            console.log(`Wizard already used fullHeal, choose a different action`);
        } else {
            console.log(`Wizard ${this.name} heals himself back to full health and then attacks ${opponent.class} ${opponent.name}`)
            this.health = 100;
            this.fireBall(opponent);
            this.specialCount--;
        }
    }
    takeDamage(damage) {
        let actualDamage = damage - this.armor;
        this.health -= actualDamage;
        console.log(`Wizard ${this.name} takes ${actualDamage} damage and has ${this.health} left!`);
        if (this.health <= 0) {
            console.log(`${this.name} has been slain!`);
        }
    }
}

class Warrior {
    constructor(name, age, armor, power) {
        this.class = 'warrior';
        this.name = name;
        this.age = age;
        this.armor = armor;
        this.power = power;
        this.health = 100;
        this.specialCount = 1;
    }
    axeSwing(opponent) {
        console.log(`Warrior ${this.name} attacks ${opponent.class} ${opponent.name} with Axe Swing for ${this.power * 2 - opponent.armor}`);
        opponent.takeDamage(this.power * 2);
    }
    whirlwind(opponent) {
        console.log(`Warrior ${this.name} attacks ${opponent.class} ${opponent.name} with WhirlWind for ${this.power * 1.75 - opponent.armor}`);
        opponent.takeDamage(this.power * 1.75);
    }
    beserk(opponent) {
        if (this.specialCount <= 0) {
            console.log(`Warrior already used beserk, choose a different attack`);
        } else {
            console.log(`Warrior ${this.name} goes Beserk and attacks ${opponent.class} ${opponent.name} twice with increased power!`)
            this.power *= 1.5;
            this.axeSwing(opponent);
            this.axeSwing(opponent);
            this.power /= 1.5;
            this.specialCount--;
        }
    }
    takeDamage(damage) {
        let actualDamage = damage - this.armor;
        this.health -= actualDamage;
        console.log(`Warrior ${this.name} takes ${actualDamage} damage and has ${this.health} left!`);
        if(this.health <= 0) {
            console.log(`${this.name} has been slain!`);
        }
    }
}

class Rogue {
    constructor(name, age, armor, power) {
        this.class = 'Rogue';
        this.name = name;
        this.age = age;
        this.armor = armor;
        this.power = power;
        this.health = 100;
        this.specialCount = 1;
    }
    shank(opponent) {

    }
    slash(opponent) {

    }
    backStab(opponent) {

    }

    takeDamage(damage) {
        let actualDamage = damage - this.armor;
        this.health -= actualDamage;
        console.log(`Rogue ${this.name} takes ${actualDamage} damage and has ${this.health} left!`);
        if(this.health <= 0) {
            console.log(`${this.name} has been slain!`);
        }
    }
}
/*
New Rogue Class
special will be a 90 damage hit with 50% probability of success
*/

let warrior = new Warrior('Bobby', 4, 25, 20)
let wizard = new Wizard('Billy', 3, 10, 40)
let rogue = new Rogue('Bob', 5, 15, 30)

/*
Automatic Fighting:
create a random attack function
put the random attack function in a loop
Use a conditional to check for a player death each iteration, if player dead, end loop
*/
const randomNum3 = () => Math.floor(Math.random() * 3);

//Selects random attacking and defending characters for each call
//this works
const chooseCharacters = () => {
    let charArray = [wizard, warrior, rogue];
    let charAttack = charArray[randomNum3()];
    let charDefend = charArray[randomNum3()];
    if(charAttack === charDefend) {
        while(charAttack === charDefend) {
            charDefend = charArray[randomNum3()];
        }
    }
    return charAttack, charDefend
}
//this needs a lot of attention
const chooseAttack = (character) => {
    let wizard = [lightningBolt, fireBall, fullHeal];
    let warrior = [axeSwing, whirlwind, beserk];
    let rogue = [shank, slash, backStab];
    let Attack = 

}
//this might almost work
const autoFight = () => {
    while (warrior.health > 0 && wizard.health > 0 && rogue.health > 0) {
        chooseCharacters();
        let attack = chooseAttack(charAttack);
         return charAttack.attack(charDefend);
    }
}






// warrior.beserk(wizard);
// wizard.fullHeal(warrior);
// warrior.beserk(wizard);
// warrior.axeSwing(wizard);
// wizard.fireBall(warrior);
// warrior.whirlwind(wizard);
// warrior.axeSwing(wizard);
// wizard.lightningBolt(warrior);
// warrior.axeSwing(wizard);

/*
Could add things like multiple characters fighting at once
More classes in the mix
extended classes?
for in loops?
Could add dexterity to classes which gives a random chance of dodging attacks using a random number generator
*/

