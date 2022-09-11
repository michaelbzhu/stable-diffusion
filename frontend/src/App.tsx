import { createContext, useEffect } from 'react'
import './App.css'
// import PrompterView from './views/PrompterView'
import { useIds } from './hooks/useIds'
import { useState } from './hooks/useState'
import { useUsername } from './hooks/useUsername'
import { getState } from './utils/getState'
import JoinView from './views/JoinView'
import SetUsernameView from './views/SetUsernameView'

export interface UsernameContextType {
  username: string | null,
  setUsername(username: string): void,
}

export interface IdsContextType {
  ids: [number, number] | null,
  setIds(ids: [number, number]): void,
}

export interface StateContextType {
  state: any | null,
  setState(ids: any): void,
}

export const UsernameContext = createContext<UsernameContextType>(null!);
export const IdsContext = createContext<IdsContextType>(null!);
export const StateContext = createContext<StateContextType>(null!);

function App() {
  const [username, setUsername] = useUsername()
  const [ids, setIds] = useIds();
  const [state, setState] = useState()

  useEffect(() => {
    if (ids !== null) {
      setInterval(() => {
        getState(ids[0]).then((state) => {
          setState(state)
        })
      }, 3000);
    }
  })
  
  return (
    <UsernameContext.Provider value={{username, setUsername}}>
      <IdsContext.Provider value={{ids, setIds}}>
        <StateContext.Provider value={{state, setState}}>
          {
            username === null ? 
              <SetUsernameView/> :
              ids === null ?
                <JoinView/> :
                <><h1 className="text-gray-700">{JSON.stringify(state)}</h1></>
          }
        </StateContext.Provider>
      </IdsContext.Provider>
    </UsernameContext.Provider>
    
  )
}

export default App
