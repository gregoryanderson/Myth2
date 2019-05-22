class Dragon {
  constructor (name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.hasEaten = 0;
  } eat (){
    this.hasEaten = this.hasEaten +1;
    if (this.hasEaten >= 3){
      this.hungry = false;
    }
  }
}

module.exports = Dragon