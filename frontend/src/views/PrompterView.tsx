import { FC, useEffect, useState } from 'react'
import PrompterInput from '../components/PrompterInput'
import { useUsername } from '../hooks/useUsername'

const PrompterView: FC = () => {
  const [enteredPrompt, setEnteredPrompt] = useState<boolean>(false)
  const [userName] = useUsername()
  const clickCallback = () => {
    console.log("Entered prompt")
    setEnteredPrompt(true);
  }

  

  return (
    <div className="App">
      <h2 className='text-black'>username: {userName}</h2>
        {enteredPrompt? 
        null : <PrompterInput onClick={clickCallback}/>}
    </div>
  )
}

export default PrompterView
