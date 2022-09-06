import { useEffect, useState } from 'react'
import './App.css'
import ImageGrid from './components/ImageGrid'
import UserGuess from './components/UserGuess'
import { generateImage } from './utils/generateImage'
import GuesserView from './views/GuesserView'

function App() {
  return (
    <div>
      <h1>Stable Diffusion Guesser</h1>
      <input
        className="p-2 my-2 mx-auto block"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className="p-2 my-2 mx-auto block"
        type="number"
        name="gameID"
        placeholder="game id"
      />
      <button className="my-2 mx-auto block">Join Game</button>
      <button className="my-2 mx-auto block">Create Game</button>
    </div>
  )
}

export default App
