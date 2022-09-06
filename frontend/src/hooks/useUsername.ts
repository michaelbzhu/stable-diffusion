import { useLocalStorage } from './useLocalStorage'

export function useUsername() {
  const [username, setUsername] = useLocalStorage('username', '')
  return [username, setUsername]
}
