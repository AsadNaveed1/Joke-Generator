const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apiKey = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const option = {
    method: "GET",
    headers: { 'X-Api-Key': '+3DUcnum+mecJFJEsw1thQ==bdGGlj7VowTjINRk'},

}

async function getJoke()
{

    try {

        jokeEl.innerText = "Updating...";

        btnEl.disabled =true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch(apiKey, option);
    
        const data = await response.json(); 
    
    
        btnEl.disabled =false;
        btnEl.innerText = "Tell Me A Joke";
    
        jokeEl.innerText = data[0].joke;
    
        
    } catch (error) {

        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        console.log(error);
        
    }





}


btnEl.addEventListener("click", getJoke); // added event listner to the const and run a function