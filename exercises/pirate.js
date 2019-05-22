class Pirate {
  constructor (name, job = 'Scallywag', booty){
    this.name = name;
    this.cursed = false;
    this.isBad = 0;
    this.booty = 0;
    this.job = job;
    
    // do not need this if because the default parameter of 
    // scallywag in the top.. in other words, if you dont pass 
    // job the parameter sets the argument to scally, otherwise
    //this.job=job

    // if (this.job !== 'Scallywag'){
    //   this.job = job;
    // }
  } 


    // when evaluating whether thatThing is true or false.. 
    // assign in console and use !!thatThing and you will find
    // whether thatThing is truthy or falsey


  commitHeinousAct (){
    this.isBad++;
    this.cursed = (this.isBad >= 3)


    // if (this.isBad >= 3){
    //   this.cursed = true;
    // }
  } 

  robShip (){
    this.booty = 100;
    return 'YAARRR!'
  }
}
module.exports = Pirate
