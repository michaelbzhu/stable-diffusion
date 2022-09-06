import { useState } from 'react'

export function useGameId() {
  const [gameId, setGameId] = useState<number | null>(null)
  return { gameId, setGameId }
}
