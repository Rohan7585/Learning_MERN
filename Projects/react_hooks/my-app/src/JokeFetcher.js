import React, { useEffect, useState } from 'react'

function JokeFetcher() {
    const [joke, setJoke] = useState('');
    const [FetchCount, setFetchCount] = useState(0);
    useEffect(() => {
        const FetchJoke = async() => {
            try{
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const data = await response.json();
                setJoke(data.value);
            }catch(err){
                console.log("Error fetching the joke: ", err);
            }}
            FetchJoke();
    }, [FetchCount]);
  return (
    <div>
        <h1>This is a random joke application.</h1>
        <p>{joke}</p>
        <button onClick = { ()=> setFetchCount(FetchCount + 1)}>New Joke</button>
    </div>
  )
}

export default JokeFetcher