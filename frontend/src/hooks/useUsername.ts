import { useLocalStorage } from './useLocalStorage'

export function useUsername() {
  const [username, setUsername] = useLocalStorage('username', null)
  return [username, setUsername]
}
