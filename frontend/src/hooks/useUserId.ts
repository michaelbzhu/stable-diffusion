import { useState } from 'react'

export function useUserId() {
  const [userId, setUserId] = useState<number | null>(null)
  return { userId, setUserId }
}
