class Wizard {
  constructor (object){
    this.name = object.name;
    this.bearded = (object.bearded == undefined) ? true : object.bearded;
    this.isRested = true;
    this.spellCounter = 0;
  }
  incantation(spell){
    return spell.toUpperCase()
  }
  cast(){
    var response 
    this.spellCounter++;
    response = (this.spellCounter >= 3) ? 'I SHALL NOT CAST' : 'MAGIC BULLET';
    this.isRested = (this.spellCounter < 3)
    return response; 
  }
}
 module.exports = Wizard

