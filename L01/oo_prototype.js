function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.toString = function(separator) {
    if (!separator) {
        separator = '';
    } else {
        separator = ' ' + separator;
    }

    return this.firstName + ' ' + this.lastName + separator + ' [' + this.age + ']';
}

function User(first, last, age, email, password) {
    // Call the parent constructor, making sure that "this" is set correctly    
    Person.call(this, first, last, age);
    this.email = email;
    //this.password = password;
    var password = password; // private like member

    /**
    * Private like hash function
    */
    function hash(pass) { 
        var hash = 0,
            i, chr, len;

        if (pass.length == 0) return hash;
        for (i = 0, len = pass.length; i < len; i++) {
            chr = pass.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    }

    this.getPassword = function(){
        return hash(password);
    }
}

var marius = new User('Marius', 'Cristea', 29, 'cristea12@gmail.com', 'marius');
console.log(marius.getPassword());
console.log(marius.toString()); // not the expected string

User.prototype = Object.create(Person.prototype);
marius = new User('Marius', 'Cristea', 29, 'cristea12@gmail.com', 'marius');
console.log(marius.getPassword());
console.log(marius.toString()); // the expected string

function getType(obj) {
    return obj.constructor.name;
}
console.log('Type of marius: ' + getType(marius)); // Person (not User)

User.prototype.constructor = User;
console.log('Type of marius: ' + getType(marius)); // User