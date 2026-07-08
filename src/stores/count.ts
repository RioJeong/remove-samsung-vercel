import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine(
    {
      count: 7,
      double: 14
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
