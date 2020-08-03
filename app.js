class School{

  constructor(name, level, numberOfStudents){
    this._name=name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  } 
  get numberOfStudents(){
     return this._numberOfStudents;
  }
  quickFacts(){
    console.log(this._name + ' ' + 'educates ' + this._numberOfStudents + ' students at the ' + this._level + ' school level.' )
  }
   static pickSubstituteTeacher(substituteTeachers){
     let randNum = Math.floor(substituteTeachers.length * Math.random());
     return substituteTeachers[randNum];

   }

  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === 'Number'){
      this.numberOfStudents = newNumberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')}
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickUpPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  pickUpPolicy(){
    return this._pickUpPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
    sportsTeams(){
       return this._sportsTeams;
     }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

let teacherArray = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
School.pickSubstituteTeacher(teacherArray);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams())
