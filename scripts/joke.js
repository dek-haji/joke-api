console.log("its working")

// Calling an API - https://official-joke-api.appspot.com/random_joke
// 1. Use a get request and get a random joke.

let setup = document.querySelector(".jokes");
let punchline = document.querySelector(".answers");
let btn = document.querySelector(".btn")

let jokeMaker = (jokeObj) => {
    setup.innerHTML = `<h5> ${jokeObj.setup}</h5>`
   
}

fetch("https://official-joke-api.appspot.com/random_joke")
    .then(jokes => jokes.json())
    .then(parsedJokes => {
        
            console.log(parsedJokes)
            // 2. Console log the setup and punchline
            console.log(parsedJokes.setup)
            // 3. Display the joke on the DOM and punchline on the DOM
            console.log(parsedJokes.punchline)
            
        jokeMaker(parsedJokes)

            btn.addEventListener("click", function(){
            punchline.innerHTML = parsedJokes.punchline
            })
        })
        



        
// Bonus 1
// 4. Display only the setup and then...
// 5. Incorporate a button with a `click` listener that 
// when triggered will display the punchline.

// Bonus 2
// 6. Incorporate a button that will get a new joke.