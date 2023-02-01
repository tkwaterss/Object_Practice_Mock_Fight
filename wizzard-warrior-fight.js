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
        console.log(`Wizard ${this.name} takes ${actualDamage} damage!`);
        console.log(`Wizard ${this.name} is at ${this.health} health!`);
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
        console.log(`Warrior ${this.name} takes ${actualDamage} damage!`);
        console.log(`Warrior ${this.name} is at ${this.health} health!`);
        if(this.health <= 0) {
            console.log(`${this.name} has been slain!`);
        }
    }
}

let warrior = new Warrior('Bobby',4,25,20)
let wizard = new Wizard('Billy',17,10,40)


warrior.beserk(wizard);
wizard.fullHeal(warrior);
warrior.beserk(wizard);
warrior.axeSwing(wizard);
wizard.fireBall(warrior);
warrior.whirlwind(wizard);
warrior.axeSwing(wizard);
wizard.lightningBolt(warrior);
warrior.axeSwing(wizard);

/*
Could add things like multiple characters fighting at once
More classes in the mix
extended classes?
for in loops?
automatic fighting?
*/