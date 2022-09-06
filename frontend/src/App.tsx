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
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
        Stable Diffusion Guesser
      </h1>
      {username === '' ? (
        <>
          <input
            ref={usernameRef}
            className="p-2 my-2 mx-auto block bg-neutral-100 text-gray-700"
            type="text"
            name="username"
            placeholder="username"
          />
          <button className="" onClick={onSetUsername}>
            Set Username
          </button>
        </>
      ) : (
        <>
          <h1 className="text-gray-700">Welcome {username}!</h1>
          <div className="flex justify-around">
            <div>
              <input
                ref={gameIdRef}
                className="p-2 my-2 mx-auto block bg-neutral-100 text-gray-700"
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
