export async function createGame() {
  const response = await fetch('http://127.0.0.1:5001/create_game', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}
