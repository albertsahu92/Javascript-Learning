// JS CRASH COURSE NOTE
// TRAVERSY MEDIA

// debugging (logging in the console)

console.log("hello world")
console.error("this is an error")
console.warn("this is a warning")

// let, const(variables)

// let variables can be redefined
// const can't be redefined

// let age = 30;
// age = 35;
// console.log(age)
// remove comments to use console log

// const age1 = 40;
// age1 = 45;
// console.log(age)
// remove comments to use console log


//string methods
// .length counts/returns the length of a variables
const s = "dragonic"

console.log(s.length)

// .toUpperCase() returns variable in all caps
console.log(s.toUpperCase())

// .toLowerCase() returns variable in all lowercase
console.log(s.toLowerCase())

// .substring extract a substring from a string
console.log(s.substring(0, 6))

//.split creates an array to variables
console.log(s.split(''))


// arrays
const elements = ["fire", 'water', 'air', 'earth']

//adds a variable to array in the determined position
elements[4] = "dark"

// adds variable to the last position in the array
elements.push('light')

// adds variable to the beginning of an array
elements.unshift('sound')

// removes variable on the beginning of an array
elements.shift()

// removes variable on the last position of the array
elements.pop()




// determine the variable is array or not
// console.log(s.isArray('dragonic'))

// .indexOf returns the position of a variable inside an array
console.log(elements.indexOf("water"))

console.log(elements)


// object literals

const person = {
    firstName: "Jack",
    lastName: 'Ripper',
    age: 25,
    hobbies: ['music', 'sports', 'gaming'],
    address: {
        street: 'whitechapel st',
        city: 'London',
        state: 'UK'

    }
}

// to get the sports variable
console.log(person.hobbies[1])

// to get the city
console.log(person.address.city)

// destructuring
const { firstName, lastName, age, hobbies, address: { city } } = person

console.log(hobbies[0])

// adding properties to object using . syntax
// ex: adding an email properties to the object
person.email = 'jackrip@gmail.com'

console.log(person)

// loops
// for loops
// for every condition met, will return the variable/function
// example
for (let i = 0; i <= 15; i++) {
    console.log(`for loop number ${i}`)
}

//while
//while loops
// while the condition is true, will return the variable/function
// beware! it will be infinite loop if the condition remains true!!
// example

let i = 0;
while (i <= 15) {
    console.log(`while loop number ${i}`);
    i++
}



const todos = [{
        id: 1,
        text: 'sunbath',
        isCompleted: true
    },
    {
        id: 2,
        text: 'breakfast',
        isCompleted: true
    },
    {
        id: 3,
        text: 'exercise',
        isCompleted: false
    }

]


// forEach, map, filter

// forEach
// looping through the array by returning each of the object
todos.forEach(function(todo) {
    console.log(todo)
})

// map
// to return an object as an array
const todoText = todos.map(function(todo) {
    return todo.text
})
const todoId = todos.map(function(todo) {
    return todo.id
})

// filter
// to apply conditions on the array
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})

console.log(todoText)
console.log(todoId)
console.log(todoCompleted)

// last minute on 48.23 on the video


// if else conditionals
// '=='  the data type didn't have to be match
//  '===' the data type must match
// example

const z = 10
const y = 4

if (z === 10) {
    console.log('z is 10')
} else if (z == 10) {
    console.log('z is 10')
} else {
    console.log('z is not 10')
}

// switch case statement
// The switch expression is evaluated once.
// The value of the expression is compared with 
// the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// example

const x = 15

const color = x > 10 ? 'red' : 'blue'

switch (color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is NOT red or blue')
        break
}

// function 
// A JavaScript function is a block of code 
// designed to perform a particular task.
// A JavaScript function is executed 
// when "something" invokes it (calls it).
// example

function addNum(x, y) {
    console.log(x + y)
}

function subNum(x, y) {
    return x - y
}

console.log(subNum(5, 1))
addNum(5, 10)

// arrow function
// shortens the function and makes code cleaner
// example
const addNums = (num1 = 1, num2 = 1) => num1 + num2

console.log(addNums(5, 5))
console.log(addNums(6, 5))

//Constructor
// the constructor is to create an object
// example

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
//     this.getBirthYear = function() {
//         return this.dob.getFullYear()
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// Class 
// same like constructor, but shorter

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)

    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

// instantiate object
const person1 = new Person('Jack', 'Ripper', '6-6-1966')
const person2 = new Person('Jill', 'Ripper', '7-6-1966')


console.log(person1.getBirthYear())
console.log(person1)
console.log(person1.getFullName())


// DOM
// Document Object Model
// The HTML DOM is a standard for how to 
// get, change, add, or delete HTML elements.

// to check window object
console.log(window)

// single element selector
const form = document.getElementById('my-form')
console.log(form)

// or

console.log(document.querySelector('h1'))

// multiple element selector

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

//  example

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

const ul = document.querySelector('.items')

// ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello Fucker'
// ul.children[1].innerText = 'BijiQ'
// ul.lastElementChild.innerHTML = '<h3>Gatal<h3>'

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h3> Hello Fucker! <h3/>'
// })

// simple DOM
// login page

// declare the document variable
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const errorMsg = document.querySelector('.msg')
const userList = document.querySelector('#users')

// add the event listener, button click, mouse or submit
myForm.addEventListener('submit', onSubmit)

// function of the button
function onSubmit(e) {
    e.preventDefault()
        // function logic

    // if all the fields are empty
    if (nameInput.value === '' || emailInput.value === '') {
        errorMsg.classList.add('error')
            // then the browser will give this message
        errorMsg.innerHTML = 'please enter the fields'
            //after 3 seconds, the error message will disappear
        setTimeout(() => errorMsg.remove(), 3000)
    } // if all the fields are filled
    else { // it will create a list item element
        const li = document.createElement('li')
            // and will add the textnode into the document
        li.appendChild(document.createTextNode(
                // with this format
                `${nameInput.value} : ${emailInput.value}`))
            // added onto this ID
        userList.appendChild(li)

        // clear fields after clicking submit
        nameInput.value = ''
        emailInput.value = ''
    }
}