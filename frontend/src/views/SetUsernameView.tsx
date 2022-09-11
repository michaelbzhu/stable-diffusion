import { useContext, useRef } from 'react'
import { UsernameContext } from '../App'
import { useUsername } from '../hooks/useUsername'

function SetUsernameView() {
  const { setUsername } = useContext(UsernameContext)
  const usernameRef = useRef<HTMLInputElement>(null)

  const onSetUsername = () => {
    if (usernameRef.current) {
      setUsername(usernameRef.current.value)
    } else {
      setUsername('')
    }
  }

  return (
    <div>
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
        Stable Diffusion Guesser
      </h1>
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
    </div>
  )
}

export default SetUsernameView
