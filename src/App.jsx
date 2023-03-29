import { useState } from 'react'
import Header from "./components/Header"
import Meme from "./components/Meme"
import memeData from "./memeData"
import './App.css'


export default function App() {
  return (
  <div>
    <Header />
    <Meme />
  </div>
  )
  }