export async function generateImage() {
  console.log('submitting')
  const response = await fetch(
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

  response
    .json()
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((err) => {
      console.log(err)
      return [
        'https://replicate.com/api/models/stability-ai/stable-diffusion/files/3d0df2eb-dddc-43a6-ab3a-4fa52691768d/out-0.png',
      ]
    })
}
