class Person {
    constructor(name='', lastName='') {
        this.name = name;
        this.lastName = lastName;
    }

    printFullName() {
        console.log(`My name is ${ this.name } ${ this.lastName }`);
    }
}

class Friend extends Person {
    constructor(name, lastName, major='') {
        super(name, lastName);
        this.major = major;
    }

    getDetails() {
        console.log(`name = ${ this.name } ${ this.lastName } major is ${ this.major }`);
    }

    hasMajor() {
        return !!this.major;
    }
    
    printFullName() {
        console.log(`My Friends name is ${ this.name } ${ this.lastName }`);
    }
}

const me = new Person('sergey', 'mikayelyan', 'Computer Science');

console.log(me);

me.printFullName();

const friend = new Friend('Ando', 'Hakobyan', 'Computer Science');

friend.printFullName();

console.log(friend.hasMajor());