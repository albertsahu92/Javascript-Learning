// const s1 = 'Hello'
// console.log(typeof s1)

// const s2 = new String("Bitches")
// console.log(typeof s2)
// console.log(s2) 

// console.log(window)
// window.alert('biji kuda')
// console.log(navigator.appVersion)

// Object Literal
// const book1 = {
//     // keys : values
//     title: 'Book One',
//     author: 'Jack Ripp',
//     year: '2015',
//     getSummary: function() {
//         return `${this.title} was written by 
//         ${this.author} in ${this.year}`
//     }
// }

// const book2 = {
//     title: 'Book Two',
//     author: 'Jill Ripp',
//     year: '2007',
//     getSummary: function() {
//         return `${this.title} was written by 
//         ${this.author} in ${this.year}`
//     }
// }

// console.log(book1.getSummary())
// console.log(book2.getSummary())

// Constructor
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
        ${this.author} in ${this.year}`
    }

//  getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

// Revise/ Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// instantiate an object
 const book3 = new Book('Book Three', 'Jack Ripp', '2012' )
 const book4 = new Book('Book Four', 'Jill Ripp', '2010' )

console.log(book4.getAge())
book3.revise('2017');
console.log(book3)

// Inheritance
// Magazine constructor
function Magazine (title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month
}

//  Prototype inheritance
Magazine.prototype = Object.create(Book.prototype);

//  instantiate magazine object
const mag1 = new Magazine('Mag Zero', 'Jack Ripp', '2020', 'Feb');

console.log(mag1.getSummary())

//Object of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    },
    // changeYear: function(newYear) {
    //     this.year = newYear;
    //     this.revised = true;
    // }

}

// create Object
const book6 = Object.create(bookProtos);
book6.title = 'Book Six';
book6.author = 'Jack Ripp';
book6.year = '2012';

// or
const book7 = Object.create(bookProtos, {
    title: {value: 'Book Seven'},
    author: {value: 'Jill Reap'},
    year: {value: '2010'}

})

console.log(book6)
console.log(book7)


// classes
class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
            return `${this.title} was written by 
            ${this.author} in ${this.year}`
        

    }
    getAge(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`

    }
}

// instantiate object
const book8 = new Books('Book Eight', 'Jack Ripp', '2014');

console.log(book8)