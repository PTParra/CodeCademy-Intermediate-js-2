/*
    School Catalogue
    Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of 
    Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

    We need to create classes for primary and high schools. Because these classes share properties and methods, each will 
    inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

    School
    Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
    Getters: all properties have getters
    Setters: the numberOfStudents property has a setter
    Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

    Primary
    Includes everything in the School class, plus one additional property
    Properties: pickupPolicy (string)

    Middle
    Does not include any additional properties or methods

    High
    Includes everything in the School class, plus one additional property
    Properties: sportsTeams (array of strings)
*/

class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
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

    set numberOfStudents(newNumberOfStudents){
        if(typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts(){
        console.log(this._name +  ' educates ' + this._numberOfStudents + ' students at the ' + this._level + ' school level.')
    }

    static pickSubstituteTeacher(substituteTeachers){
        if(Array.isArray(substituteTeachers)){
            let substitute = Math.floor(Math.random() * (substituteTeachers.length - 1));
            return substituteTeachers[substitute];
        }else{
            console.log('An Array must be passed for this to work')
        }
    }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

console.log("The substitute teacher will be: " + School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 
    'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);