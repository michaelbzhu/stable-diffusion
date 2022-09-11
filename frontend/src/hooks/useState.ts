import { useLocalStorage } from './useLocalStorage'

export function useState(): any {
  const [state, setState] = useLocalStorage('state', null)
  return [state, setState]
}
