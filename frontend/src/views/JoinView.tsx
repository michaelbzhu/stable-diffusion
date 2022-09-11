import { useContext, useEffect, useId, useRef } from 'react'
import { IdsContext, UsernameContext } from '../App'
import { createGame } from '../utils/createGame'
import { joinGame } from '../utils/joinGame'

function JoinView() {
  const {username, setUsername} = useContext(UsernameContext)
  const gameIdRef = useRef<HTMLInputElement>(null)
  const { setIds } = useContext(IdsContext)

  const onJoinGame = (gameId: number) => {
    if (username) {
      joinGame(gameId, username).then((userId) => {
        setIds([gameId, userId])
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  const onCreateGame = () => {
    createGame().then((gameId: number) => {
      onJoinGame(gameId)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
        Stable Diffusion Guesser
      </h1>
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
          <button onClick={() => {
            onJoinGame(Number(gameIdRef.current?.value))
          }} className="my-2 mx-auto block">Join Game</button>
        </div>

        <button onClick={onCreateGame} className="my-2 block">Create Game</button>
      </div>
      <button onClick={() => setUsername(null)}>Logout</button>
    </div>
  )
}

export default JoinView
