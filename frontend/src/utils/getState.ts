import { request } from "./request";

export async function getState(gameId: number) {
  return await request('/state/' + gameId.toString(), 'GET')
}
