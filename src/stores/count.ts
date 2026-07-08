import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools
} from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        combine(
          {
            count: 3,
            double: 6
          },
          set => {
            return {
              setCount(newCount: number) {
                set({
                  count: newCount
                })
              }
            }
          }
        )
      ),
      {
        version: 1,
        name: 'Count Store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

// useCountStore.subscribe(선택자함수, 실행할함수)
useCountStore.subscribe(
  state => state.count,
  count => {
    // const { count } = useCountStore.getState()
    useCountStore.setState({ double: count * 2 })
  }
)

// 사용 패턴!
// export const useXXXStore = create(
//   combine(
//     {
//       상태1: 값,
//       상태2: 값,
//       상태3: 값
//     },
//     (set, get) => {
//       return {
//         액션1: () => {},
//         액션2: () => {},
//         액션3: () => {}
//       }
//     }
//   )
// )
