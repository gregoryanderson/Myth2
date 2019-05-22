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
