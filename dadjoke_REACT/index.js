//const jokeEl= document.getElementById('joke');
//const jokeID= document.getElementById('jokeID');

//jokeID.addEventListener('click', generateJoke);

//import React from "react";
//import ReactDOM from "react-dom";

//generateJoke();

//async function generateJoke() {

const jokeResult = async () => { 
    const result = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': "application/json"
        }
    });
    
    const joke1 = await result.json();
    
    const target= document.querySelector("#joke1");
    ReactDOM.render(<span>{joke}</span>, target);
    
    };

    export const joke = async() =>{
        const btn =document.querySelector("#jokeID");
        btn.addEventListener("click", jokeResult);

    };
 
