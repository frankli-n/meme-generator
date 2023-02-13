


import React from "react"

export default function Meme() {
    function handleClick() {
        console.log("I was clicked")
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
                <button className="form--button" onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}