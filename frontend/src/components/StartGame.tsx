import { FC, useRef } from 'react'
import { useUsername } from '../hooks/useUsername'

const StartGame: FC = () => {
  const gameIdRef = useRef<HTMLInputElement>(null)
  const [username] = useUsername()
  return (
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
    </>
  )
}
export default StartGame
