export async function joinGameOnServer(id: number, username: string) {
  const response = await fetch('http://35.247.125.51:5001/join_game', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'no-cors',
    },
    body: `{
        "username": ${username},
        "game_id": ${id}
    }`,
  })

  return response.json()
}
