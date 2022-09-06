import { FC, useEffect, useState } from 'react'
import UserGuess from '../components/UserGuess'

const GuesserView: FC = () => {
  const [image, setImage] = useState<string>('')
  useEffect(() => {
    async function grabImage() {
      const imgSrc = await fetch(
        'http://35.247.125.51:5000/images/get-prediction',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            mode: 'no-cors',
          },
          body: `{
             "prompt": china,
            }`,
        }
      )
        .then((data) => {
          console.log(data)
          setImage(String(data))
        })
        .catch((err) => {
          console.log(err)
          setImage(
            'https://replicate.com/api/models/stability-ai/stable-diffusion/files/3d0df2eb-dddc-43a6-ab3a-4fa52691768d/out-0.png'
          )
        })
    }
    grabImage()
  }, [])

  return (
    <div className="App">
      <UserGuess />
      {image !== '' && <img src={image} />}
    </div>
  )
}

export default GuesserView
