import { FC, useEffect, useState } from 'react'
import PrompterInput from '../components/PrompterInput'

const PrompterView: FC = () => {
  const [enteredPrompt, setEnteredPrompt] = useState<boolean>(false)

  const clickCallback = () => {
    console.log("Entered prompt")
    setEnteredPrompt(true);
  }

  

  return (
    <div className="App">
        {enteredPrompt? 
        null : <PrompterInput onClick={clickCallback}/>}
    </div>
  )
}

export default PrompterView
