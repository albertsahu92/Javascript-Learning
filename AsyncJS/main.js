// callbacks
const posts = [
    { title: 'Post One', body:'this is first post'},
    { title: 'Post Two', body:'this is second post'},
    { title: 'Post Three', body:'this is third post'}

];

// function getPosts() {
//     setTimeout(() => {
//         let output ='<h1> Async Course </h1>';
//         posts.forEach((post, index) =>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output
//     }, 1000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000)
// }



// createPost({
//     title: 'Post Four', body: 'This is Fourth Post'
// }, getPosts);



// function loadDoc() {
//     let poemDisplay = document.getElementById('poemdisplay')
//     let request = new XMLHttpRequest(); 
//     request.open('GET', 'http://aws.random.cat/meow'); 
//     request.responseType = 'json'; 
//     request.onload = function() { 
//         poemDisplay.innerHTML = '<img src ='+request.response.file+'>'; 
//     }; 
//     request.send();
//   }

//   loadDoc();
  

// promises

function getPosts() {
    setTimeout(() => {
        let output ='<h1> Async Course </h1>';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false
            if(!error) {
            resolve();
            }
            else{
            reject('Error: Something went wrong')
            }
        }, 2000);
    });

    
}

// createPost({
//         title: 'Post Four', body: 'This is Fourth Post'
//     }).then(getPosts)
//     .catch(err => console.log(err));


// Promise.all
// const promise1 = Promise.resolve('sucka me dick');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'bye bitches!'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => console.log(values))


// async / await
async function init() {
    await createPost ({title: 'Post Four', 
    body:'This is Fourth post'});

    getPosts()
}

init()

async function fetchUsers() 
{
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data)
}

fetchUsers()


