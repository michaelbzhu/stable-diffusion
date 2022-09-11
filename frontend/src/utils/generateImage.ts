import { request } from "./request"

export async function generateImage() {
  await request('/images/get-prediction', 'POST', {"prompt": "china"})
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
