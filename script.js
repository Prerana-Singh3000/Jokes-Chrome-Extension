fetchJoke();
function fetchJoke(){

fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = jokeText;
})
}

let button = document.getElementById('btn');
button.addEventListener("click", function(){
    fetchJoke();
})
