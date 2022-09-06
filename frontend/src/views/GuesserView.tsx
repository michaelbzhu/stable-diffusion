import { FC, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import UserGuess from '../components/UserGuess'

const GuesserView: FC = () => {
  const state = {
    'image': 'https://replicate.com/api/models/stability-ai/stable-diffusion/files/3d0df2eb-dddc-43a6-ab3a-4fa52691768d/out-0.png',
    'users': {
      0: ['Surya', 5],
      1: ['Surya', 5],
      2: ['Surya', 5],
      3: ['Surya', 5],
    }
  }

  // const [image, setImage] = useState<string>('')
  // useEffect(() => {
  //   async function grabImage() {
  //     const imgSrc = await fetch(
  //       'http://35.247.125.51:5000/images/get-prediction',
  //       {
  //         method: 'POST',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //           mode: 'no-cors',
  //         },
  //         body: `{
  //            "prompt": china,
  //           }`,
  //       }
  //     )
  //       .then((data) => {
  //         console.log(data)
  //         setImage(String(data))
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         setImage(
  //           'https://replicate.com/api/models/stability-ai/stable-diffusion/files/3d0df2eb-dddc-43a6-ab3a-4fa52691768d/out-0.png'
  //         )
  //       })
  //   }
  //   grabImage()
  // }, [])

  const players = [
    { name: 'Surya', score: 7, rank: 1 },
    { name: 'Michael', score: 7, rank: 3 },
    { name: 'Armaan', score: 7, rank: 2 },
    { name: 'William', score: 7, rank: 4 },
  ]

  return (
    <div className="App flex max-h-max ">
      <div className="sm:w-1/3 mr-5">
        <Sidebar players={players} />
      </div>
      <div className="sm:w-2/3">
        {state.image !== '' && <img src={state.image} />}
        <UserGuess />
      </div>
    </div>
  )
}

export default GuesserView
