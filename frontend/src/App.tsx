import { useEffect, useRef } from 'react'
import './App.css'
import JoinView from './views/JoinView'
import { useGameId } from './hooks/useGameId'
import { useId } from './hooks/useId'
import { useState } from './hooks/useState'
import { getState } from './utils/getState'
import PrompterView from './views/PrompterView'
import GuesserView from './views/GuesserView'
import { joinGame } from './utils/joinGame'

function App() {
  const [id, setId] = useId()
  // const {gameId, leaveGame, joinGame} = useGameId()
  const [state, setState] = useState()

  // useEffect(() => {
  //   if (id !== null && gameId !== null) {
  //     let interval = setInterval(() => {
  //       setState(getState(gameId))
  //     }, 1000);
  //   }
  // }, [id])

  useEffect(() => {
    console.log("in use effect");
    console.log(joinGame(0));
  })

  // return (
  //  (state === null ?  
  //   <JoinView/> : 
  //   (state.prompt === null ? 
  //     (state.round_num === id ? 
  //       <PrompterView/> :
  //        <></>) : 
  //     <GuesserView/>))
  // )

  return (<GuesserView/>)
}

export default App
