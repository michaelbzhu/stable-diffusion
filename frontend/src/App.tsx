import { useEffect, useRef, useState } from 'react'
import './App.css'
import ImageGrid from './components/ImageGrid'
import StartGame from './components/StartGame'
import { useUsername } from './hooks/useUsername'

function App() {
  const [username, setUsername] = useUsername()
  const usernameRef = useRef<HTMLInputElement>(null)
  const onSetUsername = () => {
    if (usernameRef.current) {
      console.log(usernameRef.current.value)
      setUsername(usernameRef.current.value)
    } else {
      setUsername('')
    }
  }
  console.log(username)
  return (
    <div>
      <h1>Stable Diffusion Guesser</h1>
      {username === '' ? (
        <>
          <input
            ref={usernameRef}
            className="p-2 my-2 mx-auto block"
            type="text"
            name="username"
            placeholder="username"
          />
          <button onClick={onSetUsername}>Set Username</button>
        </>
      ) : (
        <StartGame />
      )}
    </div>
  )
}

export default App
