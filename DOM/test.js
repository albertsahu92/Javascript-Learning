const form = document.querySelector("#register")
const username = document.getElementById("username")
const email = document.getElementById("email")
const errMsg = document.querySelector(".msg")
const regisUser = document.querySelector('#users')
// const button = document.getElementById()
// console.log(regisUser)

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    if (username.value === '' || email.value === '') {
        errMsg.classList.add("error")
        errMsg.innerHTML = "please fill all the fields"
        setTimeout(() => errMsg.remove(), 2500)
    }
    else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${username.value} : ${email.value} `))
        const removeBtn = document.createElement("button")
        removeBtn.className = "btn btn-danger ml-1 mt-2 remove"
        removeBtn.appendChild(document.createTextNode("Remove"))
        li.appendChild(removeBtn)
        regisUser.appendChild(li)

        username.value =''
        email.value = ''

        function removeUser(e) {
            e.preventDefault()
            if(e.target.classList.contains("remove")) {
               const li = e.target.parentElement
                regisUser.removeChild(li)
                
            }
        }



    }


}

// function removeUser(e) {
//     e.preventDefault()
//     if(e.target.classList.contains("remove")) {
//        const li = e.target.parentElement
//         regisUser.removeChild(li)
        
//     }
// }

