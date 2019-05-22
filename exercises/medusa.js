class Medusa {
  constructor (name){
    this.name = name;
    this.statues = [];
  }
  stare (lostPerson){
    this.statues.push(lostPerson);
    lostPerson.isStoned = true;
    if (this.statues.length > 3) {
      this.statues[0].isStoned = false;
      this.statues.shift(); 
    }
  }
}


module.exports = Medusa