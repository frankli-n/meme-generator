import React from "react"
import reactLogo from '../images/react.svg'
import trollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <div className="App">
        <div>
        <a href="https://reactjs.org" target="_blank">
            <img src={trollFace} className="logo react" alt="React logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>React Meme Generator</h1>
        <div className="card">


        </div>
  
      </div>
    )
}