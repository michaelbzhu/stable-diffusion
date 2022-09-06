import { FC, useRef } from 'react'

const UserGuess: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (inputRef.current) {
      console.log('value 👉️', inputRef.current.value)
    }
  }
  return (
    <>
      <input
        ref={inputRef}
        className="p-2 m-2"
        type="text"
        name="guess"
        placeholder="guess"
      />
      <button onClick={handleClick} className="p-2 m-2 rounded-lg bg-sky-900">
        Submit
      </button>
    </>
  )
}

export default UserGuess
