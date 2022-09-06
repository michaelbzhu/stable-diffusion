import { FC, useRef } from 'react'

interface PrompterInputProps {
    onClick: () => void
}

const PrompterInput: FC<PrompterInputProps> = ({onClick}:PrompterInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
//   const handleClick = () => {
//     if (inputRef.current) {

//       console.log('value for your prompt 👉️', inputRef.current.value)
//       onClick();
//     }
//   }
  return (
    <>
      <input
        ref={inputRef}
        className="p-2 m-2"
        type="text"
        name="guess"
        placeholder="Enter your prompt"
      />
      <button onClick={onClick} className="p-2 m-2 rounded-lg bg-sky-900">
        Submit
      </button>
    </>
  )
}

export default PrompterInput;
