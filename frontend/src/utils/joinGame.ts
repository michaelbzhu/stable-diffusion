export async function joinGame(id: number) {
  const response = await fetch('http://localhost:5001/join_game', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: `{
        "prompt": china,
    }`,
  })

  response
    .json()
    .then((data) => {
      console.log('got back user id ', data)
      return data
    })
    .catch((err) => {
      console.log(err)
      return 1
    })
}
