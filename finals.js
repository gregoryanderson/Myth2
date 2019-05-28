class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;  
  }
  isWhite () {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;  //string interpolation
  }
}

module.exports = Unicorn;






class Vampire {
  constructor(name, pet, thirsty){
this.name = name;
this.thirsty = true;
if (pet === undefined){
  this.pet = 'bat';
  } else {
    this.pet = pet;
  }
} 
drink () {
  this.thirsty= false;
}
}


module.exports = Vampire;






class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color; 
    this.hungry = true;
    this.hasEaten = 0;
  } 
  eat () {
    this.hasEaten = this.hasEaten + 1;
    if (this.hasEaten == 5){
      this.hungry = true;
    } else if (this.hasEaten >= 3){
      this.hungry = false;   
    }
  } 
}






class Hobbit {
  constructor (name,disposition = 'homebody', age, adult){
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = (this.name == 'Frodo');

  } 
  celebrateBirthday () {
    this.age = this.age + 1;
    if (this.age >= 101) {
      this.old = true;
    } else if (this.age >= 33){
      this.adult = true;
    }
  } 
}

class Pirate {
  constructor (name, job= 'Scallywag', booty){
  this.name = name;
  this.cursed = false;
  this.isBad = 0;
  this.booty = 0;
  if (this.job !== 'Scallywag'){
      this.job= job;
    }
  } commitHeinousAct (){
    this.isBad++;

    //got rid of an if statement here
    this.cursed = this.isBad >=3
    
  } robShip (){
    this.booty = 100;
    return 'YAARRR!'
  }
}
// this doesnt really work at all

class Wizard {
  //bearded and incantation change and need
  //parameters.. not just boolean
  constructor (object, bearded, incantation){
  this.name = object.name;
  this.bearded = object.bearded || true;
  this.incantation = incantation.str.toUppercase;
  if (this.bearded = undefined){
    this.bearded = true;
    //why is this not object.bearded
  } else this.bearded = false;
} 
} 
//str.toUppercase is a problem

module.exports = Wizard


class Werewolf {
  constructor (name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
 //wolf and human are never the same at one time.. there is no 
 //point in assigning them.. attach wolf's property to humans 
 //and set as opposite instead.

 //watch for placement below with human and wolf

  change(){
    this.human = !this.human;
    this.wolf = !this.human;
    this.hungry = !this.hungry;

  // when using (==) you are not assigning anything
  // when using (=) you are reassigning that value to whatever
  // comes after the (=)

  // if (this.human){
    // this.human = false;
    // this.wolf = true;
    // this.hungry = false;
    // } else {
    //   this.human = true;
    //   this.wolf = false;
    //   this.hungry = true;
    // }
  }
  eat(victim){
    if (this.hungry){
      victim.alive = false;
      this.hungry = false;
      this.human = true;
    } 

  //unsure about this return and its effect
  //   return "I'm not hungry"
  }
}
module.exports = Werewolf




class Medusa {
  constructor (name){
    this.name = name;
    this.statues = [];
  }

  //unsure if i know where this parameter comes 

  //also who gets popped?

  // get rid of if statement together
  stare (lostPerson){
    this.statues.push(lostPerson);
    lostPerson.isStoned = true;
    if (this.statues.length > 3) {
      this.statues[0].isStoned = false;
      this.statues.shift(); 
    }
  }
}



//key, value assert, value
module.exports = Medusa


class Person {
  constructor (name){
    this.name = name;
    this.isStoned = false;
  }
}

module.exports = Person;




class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  
  receiveBelief() {
    this.dust++;
  }
  
  believe() {
    this.dust += 10;
  }

  makeDresses(flower) {
    var newArray = this.clothes.dresses.concat(flower);
    this.clothes.dresses = newArray;
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant (infant) {
    if (this.disposition == 'Vengeful'){
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
      if (this.humanWards.length >= 3){
        this.disposition = 'Good natured';
      }
    } 
    return infant;
  } 
}

module.exports = Fairy



