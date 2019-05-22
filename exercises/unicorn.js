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