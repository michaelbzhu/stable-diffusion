import { useContext, useEffect, useId, useRef } from 'react'
import { IdsContext, StateContext, UsernameContext } from '../App'
import { createGame } from '../utils/createGame'
import { joinGame } from '../utils/joinGame'

function WaitingRoom() {
  const {username} = useContext(UsernameContext)
  const {state} = useContext(StateContext)
  const { ids } = useContext(IdsContext)

  const onStartGame = () => {
    // createGame().then((gameId: number) => {
    //   onJoinGame(gameId)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }

  return (
    <div>
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
        {"Game " + ids![0]}
      </h1>
      <h1 className="text-gray-700">Waiting Room</h1>
      {Object.keys(state.users).map((key) => {
        return (<p className='text-gray-700' key={key}>{state.users[key][0]}</p>)
      })}
      <button onClick={onStartGame}>Start Game</button>
    </div>
  )
}

export default WaitingRoom
