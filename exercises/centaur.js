class Centaur {
  constructor (name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.action = 0;
    }
  shoot(){
    this.action++;
    this.cranky = this.action >= 3;
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!'

    // if (this.cranky){
    //   return 'NO!';
    // }


    // this.action++;
    // if(this.action >= 3){
    // this.cranky = true;
    // }
    // return 'Twang!!!';
  }
  run(){
    if(this.layingDown == true){
      return 'NO!'
    }
    this.action++;   
    this.cranky = this.action >= 3;
    return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!'; 
  }
  sleep(){
    if(this.layingDown == false){
      return 'NO!'
    }
    if(this.layingDown == true){
      this.cranky =false;
      this.isRested = true;
      this.action = 0;
      return 'ZZZZ'
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion(){
    if(this.standing == true && this.task >=3){
      this.cranky = false;
      this.isRested = false;
    } else if (this.layingDown == true) {
        return 'Not while I\'m laying down!';
    } else {
      this.cranky = true;
    }
  }
}

module.exports = Centaur 