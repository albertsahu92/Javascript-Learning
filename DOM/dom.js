//DOM crash course Notes

// examine the document object  //

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// // document.title = 'biji kuda'
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)

// // console.log(document.all)
// // console.log(document.all[10])

// console.log(document.forms)
// console.log(document.links)

//  getElementbyID //
// selecting the element from ID name on the HTML
// example of ID '<h1 id="header-title">Item Lister</h1>'

// example, changing a list item
// console.log(document.getElementById('items'))
// ul = document.getElementById('items')
// ul.children[0].innerText = 'biji kuda'
// console.log(ul.children[0])

// // changing the header element 
// console.log(document.getElementById('header-title'))
// headerTitle = document.getElementById('header-title')
// headerTitle.textContent = 'Biji Lister'
// headerTitle.innerText = 'Kuda Binal'
// console.log(headerTitle.textContent)
// headerTitle.innerHTML = '<h2>Bijimu<h2/>'

// tip : if the selected is UL or OL, 
// you must select the PARENT Node First


// getElementsByClassName
// selecting the elements by class name on the HTML 
//  example of a class '<h2 class="title">Items</h2>'

//changing the list element
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Biji 2'
// items[2].textContent = 'Biji 3'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'gray'

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'gray'
// }

/* getElementsByTagName
selecting the elements by tag name on the HTML
example of a tag '<h2> this is a header </h2>'
 */

/* var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = 'Biji 2'
li[2].textContent = 'Biji 3'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'gray'

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'gray'
} */

/* QuerySelector */
/* grabs a single element from html, 
with CSS sign like '.' for Class or '#' for ID 
if there is a multiple element with the same name/class/id/tag, 
it will take the first one*/

// var header = document.querySelector('#main-header')
// console.log(header)
// header.textContent = 'Biji Kuda'
// header.style.borderBottom = 'solid 4px #ccc'

/*  you can select one by one 
element with pseudo css selectors like this*/

/* default single item (first item) */
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'

/* for the last item in this case 4th item */
// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

/* for the nth item, between first and the last 3rd for ex*/
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.color = 'magenta'


/* QuerySelectorAll 
same like querySelector, except, this selects all of the elements*/

// var titles = document.querySelectorAll('.title')
// console.log(titles)

/* you can use pseudo css selector too here, example */
// var odd = document.querySelectorAll('li:nth-child(odd)')

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
// }


/* Traversing the DOM */

// var itemList = document.querySelector('#items')

// parent node
/* console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode)
 */

// parent element
/* console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement) */

// childNodes
// console.log(itemList.childNodes)

// children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// firstChild (gives us the text node which includes whitespace)
// console.log(itemList.firstChild)

// firstElementChild (gives us the text without whitespace)
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Biji 1'

// lastChild (same like first child, except this is for last child)
// console.log(itemList.lastChild)

// lastElementChild 
// (same like first element child, except this is for the last)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Biji 4'

// nextSibling
// same like child, gives us the next parent node
// except, this is for the parent and gives us the text node
// console.log(itemList.nextSibling)

// nextElementSibling
// same like elementChild gives us the content
// after the current element
// console.log(itemList.nextElementSibling)

// previousSibling
// same like child, gives us the text node
// of previous parent node
// console.log(itemList.previousSibling)


// previousElementSibling
// same like elementChild gives us the content
// before the current element
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'cyan'

//  createElement

// create a div
// var newDiv = document.createElement('div')

// add class 
// newDiv.className = 'hello'

// add id
// newDiv.id = 'hello1'

// add attribute
// newDiv.setAttribute('title', 'Hello Bitches!')

// create text node
// var newDivText = document.createTextNode('stupid bitches!')

// add text to div
// newDiv.appendChild(newDivText)

// var parentDiv = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)
// console.log(parentDiv)

// console.log(h1)

// parentDiv.insertBefore(newDiv, h1)


// eventListener

// var buttonClick = (a) => console.log('button clicked')

// var button = document.getElementById('button').addEventListener(
//     'click', buttonClick)

// function defaultF(b) {
//     console.log(b)
//     console.log(b.target)
//     console.log(b.target.id)
//     console.log(b.target.className)
//     console.log(b.target.classList) }

// function buttonClick() {
//     console.log('button clicked stupid!')}

// Mouse Events

// var button = document.getElementById('button')
//     .addEventListener('click', runEvent)
// var box = document.getElementById('box')
   
// box.addEventListener('mousemove', runEvent)

// var itemInput = document.querySelector('input[type="text"]')
// var select = document.querySelector('select')
// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('input', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

// form.addEventListener('submit', runEvent)

// final project DOM
var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

// form submit event
form.addEventListener('submit', addItem)
// delete event
itemList.addEventListener('click', removeItem)
// filter event
filter.addEventListener('keyup', filterItems)

// Add item
function addItem(a) {
    a.preventDefault()
    // console.log()
    
    // get input value
    var newItem = document.getElementById('item').value
    // console.log(newItem)

    // create new li element
    var li = document.createElement('li')
    // add class
    li.className = 'list-group-item'
    // console.log(li)

    // add the text node with input value
    li.appendChild(document.createTextNode(newItem))
    // console.log(itemList)
    
    //  create delete button
    var deleteBtn = document.createElement('button')
    // add classes to the deletebtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    // append button
    li.appendChild(deleteBtn)
    itemList.appendChild(li)
}

// remove Item
function removeItem(a){
    if(a.target.classList.contains('delete')) {
        if(confirm('are you sure?')) {
            var li = a.target.parentElement
            itemList.removeChild(li)
          

        }
    }
}

// filter item function
function filterItems(a){
    a.preventDefault
    //converts text to lowercase
    var text = a.target.value.toLowerCase()
    // get list item
    var items = itemList.getElementsByTagName('li')
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) !=-1) {
            item.style.display = 'block' }
         else{
                item.style.display = 'none'
            }

        
    })

}

// function runEvent(e) {
    // e.preventDefault()
    // console.log('Event Type: ' + e.type);

    // document.body.style.display ='none'

    // add the input value on the form when logging
    // console.log(e.target.value)

    // document.getElementById('output').innerHTML ='<h3>'+e.target.value+'</h3>'
    // create a mousepoint x&y tracker
    // output = document.getElementById('output')
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '
    // +e.offsetY+'</h3>';

    // change the object color as the event happens
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// }


