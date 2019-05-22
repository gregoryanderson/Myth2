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