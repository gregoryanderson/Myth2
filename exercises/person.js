class Person {
  constructor (name) {
    this.name = name;
    this.isStoned = false;
  }

  stare (){
    this.isStoned = true;
  }
}

module.exports = Person