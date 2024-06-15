import React, { useEffect, useState } from 'react'

function JokeFetcher() {
    const [joke, setJoke] = useState('');
    const [FetchCount, setFetchCount] = useState(0);
    useEffect(() => {
        const FetchJoke = async () => {
            try {
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const data = await response.json();
                setJoke(data.value);
            } catch (err) {
                console.log("Error fetching the joke: ", err);
            }
        }
        FetchJoke();
    }, [FetchCount]);
    return (
        <>
            <div className="flex justify-center flex-col drop-shadow-2xl items-center border-4 border-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                <h1 className='text-9xl mb-4'>😁</h1>
                <button className="bg-green-500 rounded-full shadow-md px-6 py-3" onClick={() => setFetchCount(FetchCount + 1)}>New Joke</button>
            </div>
            <div className='flex justify-center items-center border-4 border-black drop-shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                <p className='text-center self-center drop-shadow-2xl'>{joke}</p>
            </div>
        </>
    )
}

export default JokeFetcher