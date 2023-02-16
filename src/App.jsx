import { useState } from 'react'
import Header from "./components/Header"
import Meme from "./components/Meme"
import memeData from "./memeData"
import './App.css'


export default function App() {
  // const memesDataArray = memeData.data.memes
  const bolgus = memeData.data.memes.map(item => {
  return (
    <Meme 
        key={item.id}    
        item={item}
        
    />
  )
  })        

  return (
  <div>
    <Header />
    <Meme />
    <section>
        {/* {bolgus} */}
    </section>
  </div>
  )
  }