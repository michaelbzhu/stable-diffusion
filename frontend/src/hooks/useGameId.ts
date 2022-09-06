import { useState } from 'react'

export function useGameId() {
  const [gameId, setGameId] = useState<number | null>(null)
  const leaveGame = () => {
    setGameId(null)
  }
  const joinGame = (id: number) => {
    setGameId(id)
  }
  return [gameId, leaveGame, joinGame]
}
