const toyCollection = document.querySelector("#toy-collection") // select the div id for the form using querySelector 

document.addEventListener('DOMContentLoaded', () => { // Load the application from the DOM
  fetch('http://localhost:3000/toys').then((response) => { 
    // Send a request to fetch the API. Use a callback function to return a response
      return response.json() // from the JSON server. Display the API, once the response goes through
  }).then((response) => {
    response.forEach((item, key) => { // Go through each response and find the key and item for each object. The key represnets the id, where
      displayToys(item, key) // the item represents the object with its associated properties.
    })
  })
})

displayToys = (item, key)=> {
  let div = document.createElement("div") // create a new div element 
  div.className = "card" // call the className on the div class to create a new div class.
  toyCollection.appendChild(div) // add the div to the webpage by appendChild(div) using the toyCollection div id

    let h2 = document.createElement("h2") // create a new h2 element
    h2.innerText = item.name // call the name property on the item object  
    div.appendChild(h2) // add the h2 to the webpage using the appendChild(h2) 

    let h2_2 = document.createElement("h2_2")
    h2_2.innerText = item.id
    div.appendChild(h2_2)

    let img = document.createElement("img") // create a new img element 
    img.className = "toy-avatar"; // create a new image class name 
    img.src = item.image; // call the image property on the item object
    div.appendChild(img); // add the img to the webpage using the appendChild(img)

    let img_2 = document.createElement("img_2"); 
    img_2.src = item.id;
    div.appendChild(img_2);

    let p = document.createElement("p")
    p.innerText = item.likes;
    div.appendChild(p);

    let button = document.createElement("button");
    button.className = "like-btn";
    button.innerHTML = "Like";
    div.appendChild(button);
    
    button.addEventListener('click', function(){
      let likes = ++item.likes;
      updateLikes(likes, item.id);
    })

    let newButton = document.createElement("button");
    newButton.innerHTML = "Do Not Like";
    div.appendChild(newButton);

    newButton.addEventListener('click', function(){
      let likes = --item.likes;
      updateLikes(likes, item.id);
    })
}


const toyForm = document.querySelector('.container')
let toggleForm = false;

showForm = () =>{
  toggleForm = !toggleForm;
  if(toggleForm){
    toyForm.style.display = 'block';
  }else{
    toyForm.style.display = 'none';
  }
}

document.querySelector("#new-toy-btn").addEventListener('click', showForm); // add an event listener to show the form when an event or action
// happens, such as listening to a click. 
addToy = (event) => { // Create a new function called addToy via the submit event listener 
    event.preventDefault() // prevent default will stop the default action of an element from occuring

    let newToy = {  
        image: event.target.image.value, //grab the value of the element (image) based on the target specified on the page
        name: event.target.name.value, //grab the value of the element (name) based on the target speciefied on the page
        likes: 0

    }

    fetch('http://localhost:3000/toys', { // fetch the API request
        headers: {
          'Content-Type': 'application/json' // the header will contain the JSON application you are trying to run
        },
        method: 'POST', // the method will contain the request you are making. POST, PATCH, or DELETE
        body: JSON.stringify(newToy) // body will contain the values that were grabbed by the objects and turn it into a JSON string format.
        }).then((response) => { // this promise is send a reponse to the server 
            return response.json(); // return with a JSON response
        });
        event.target.reset(); // reset the event after the response is handled/complete. 
};

updateToy = (event) => {
  event.preventDefault();
  let id = event.target.card_id.value;
  let changeToy = {
    name: event.target.name.value,
    image: event.target.image.value
  };

  fetch ('http://localhost:3000/toys/'+ id, { 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(changeToy)
    }).then((response) => {
      return response.json()
    }) 
}



let createNewToyButton = document.querySelector(".add-toy-form").addEventListener("submit", addToy) //submit, and addToy function for target
let modifyToyButton = document.querySelector(".modify-toy-form").addEventListener("submit", updateToy)
let modifyToyImage = document.querySelector(".modify_images").addEventListener("submit", updateImage)

updateLikes = (likes, id) => {
  console.log("make it work")
  let like = {
    likes: likes
  }
  fetch('http://localhost:3000/toys/'+ id, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json"
    },
    method: 'PATCH',
    body: JSON.stringify(like)
    }).then((response) => {
        return response.json()
    })
}








// const addBtn = document.querySelector('#new-toy-btn')
// const toyForm = document.querySelector('.container')
// let addToy = false

// // YOUR CODE HERE

// addBtn.addEventListener('click', () => {
//   // hide & seek with the form
//   addToy = !addToy
//   if (addToy) {
//     toyForm.style.display = 'block'
//     // submit listener here
//   } else {
//     toyForm.style.display = 'none'
//   }
// })

//OR HERE!

// document.addEventListener('DOMContentLoaded', function() {

//   document.querySelector("form").addEventListener('submit', useForm) 
  
// })
//   fetch('http://localhost:3000/toys') 
//     .then(function(response) {
//       console.log("response", response)
//       return response.json()
//     })
//     .then((toys) => addAllToys(toys))
      
//       addAllToys = (toys) =>{
//         toys.forEach(toy => addToys(toy))
//     }
  
//     function addToys(toy) {
//       const toyCollection = document.querySelector("#toy-collection") // select the div id for the form using querySelector 
      
//       let div = document.createElement("div") // create new elements for div

//       div.className = "card" // call the className to define a div class called "card"

//       let img = document.createElement("img") // create a new element for img

//       img.className = "toy-avatar" // call the className to define a img called div 

//       img.src = toy.image // use the img.src to define the image on the hash 

//       let h2 = document.createElement("h2") // create a new element for the h2 tag 

//       h2.innerText = toy.name // use innerText to dsiplay the name via the h2 tag
      
//       let p = document.createElement("p") // create a new element for the p tag 

//       p.innerText = toy.likes // use the innerText to display the likes via the p tag 

//       let button = document.createElement("button") // create a new element if r

//       button.innerHTML = "Like" // us the innerHTML to display the button via the button tag

//       div.appendChild(img) // append the img to thr webpage using div.appendChild(img)

//       div.appendChild(p) // append the likes to the webpage using the div.appendChild(p)

//       div.appendChild(h2) // append the title to the webpage using the div.appendChld(h2)

//       div.appendChild(button) // append the button to the webpage using the div.appendChild(button)

//       toyCollection.appendChild(div) // finally append the div contents of bookCollection (img, likes, and h2) to the webpage back to the div using toyCollection.appendChild(div)
//     }

//     function useForm(e) {
      
//       e.preventDefault()
//       console.log(e.target.image.value)
//       let newToy = { 
        
//         image: e.target.image.value,
//         name: e.target.name.value,
//         likes: 0
//       }

//       addToys(newToy)

      // fetch('http://localhost:3000/toys', {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: JSON.stringify(newToy) 
      //   })
      //   .then((response) => response.json())
      //   .then(toy => addToys(toy))

      //   e.target.reset()

//     function editLikes(){
//       likeToy = 0
//       fetch(`http://localhost:3000/toys/${e.target.parentElement.id}`,{
//         method: 'PATCH', 
//         headers:{
//           'Content-Type': 'application/json',
//           'Accept': 'application/json' 
//         }
//       })
// 
