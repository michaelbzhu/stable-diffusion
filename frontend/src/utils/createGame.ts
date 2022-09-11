import { request } from "./request";

export async function createGame(): Promise<number> {
  return await request('/create_game', 'POST')
}
