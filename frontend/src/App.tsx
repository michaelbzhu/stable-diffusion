import { useRef } from 'react'
import './App.css'
import { useUsername } from './hooks/useUsername'

function App() {
  const [username, setUsername] = useUsername()
  const usernameRef = useRef<HTMLInputElement>(null)
  const gameIdRef = useRef<HTMLInputElement>(null)

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
        <>
          <h1>Welcome {username}!</h1>
          <div className="flex justify-around">
            <div>
              <input
                ref={gameIdRef}
                className="p-2 my-2 mx-auto block"
                type="number"
                name="gameID"
                placeholder="game id"
              />
              <button className="my-2 mx-auto block">Join Game</button>
            </div>

            <button className="my-2 block">Create Game</button>
          </div>
          <button onClick={() => setUsername('')}>Logout</button>
        </>
      )}
    </div>
  )
}

export default App
