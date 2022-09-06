import { useLocalStorage } from './useLocalStorage'

export function useId() {
  const [id, setId] = useLocalStorage('id', null)
  return [id, setId]
}
