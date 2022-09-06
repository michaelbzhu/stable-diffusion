export async function getState(gameId: number) {
  const response = await fetch('http://localhost:5001/state/' + gameId.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
  })

  response
    .json()
    .then((data) => {
      return data
    })
}
