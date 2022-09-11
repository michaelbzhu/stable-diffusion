import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useIds() {
  const [ids, setIds] = useLocalStorage('ids', null)
  return [ ids, setIds ]
}
