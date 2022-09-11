import { request } from "./request"

export async function joinGame(id: number, username: string): Promise<number> {
  return await request('/join_game', 'POST', {
    "username": username,
    "game_id": id
  })
}
