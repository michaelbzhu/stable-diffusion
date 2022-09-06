export async function createGame() {
  const response = await fetch('http://35.247.125.51:5001/create_game', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
  })

  return response.json()
}
