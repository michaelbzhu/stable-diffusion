import { FC, useRef } from 'react'

const UserGuess: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (inputRef.current) {
      console.log('value 👉️', inputRef.current.value)
    }
  }
  return (
    <div className="flex flex-row">
      <input
        ref={inputRef}
        className="p-2 my-2 mr-2 bg-gray-100 text-gray-700 w-full"
        type="text"
        name="guess"
        placeholder="guess"
      />
      <button
        onClick={handleClick}
        className="p-2 my-2 rounded-lg bg-gray-100 text-gray-700"
      >
        Submit
      </button>
    </div>
  )
}

export default UserGuess
