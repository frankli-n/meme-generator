import React from "react"
import memesData from "../memeData.jsx"


export default function Meme() {



    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomUrl = memesArray[randomNumber].url
        
        return randomUrl
    }
        
    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onMouseOver={getMemeImage}>
                    Get a new meme image 🖼
                </button>
                <div className="memeImageDisplay">
                <img src={getMemeImage} alt="Country flag"/>
                </div>
            </form>
        </main>
    )
}