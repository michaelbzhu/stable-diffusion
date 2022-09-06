import { useLocalStorage } from './useLocalStorage'

export function useState() {
  const [state, setState] = useLocalStorage('state', null)
  return [state, setState]
}
