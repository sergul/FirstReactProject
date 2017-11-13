const add = (a, b) => {
    return a + b;
}

//console.log(add(55, 1));


// this keyword - no longer bound

const user = {
    name: 'Sergey',
    friends: ['Ando', 'Armen', 'Vahe'],
    printFriends () {
        var nested = () => {
            console.log(this.name);
            console.log(this.friends);
    
            console.log(this);
        }
        console.log(this.name);
        nested();
    }
};



user.printFriends();