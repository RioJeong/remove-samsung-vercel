import { create } from 'zustand'

interface State {
  count: number
  setCount: (count: number) => void
}

export const useCountStore = create<State>(set => ({
  count: 7,
  setCount: count => set({ count })
}))
