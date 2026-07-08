import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  combine(
    {
      user: {
        name: 'HEROPY',
        age: 85,
        address: {
          city: 'Seoul',
          emails: ['abc@gmail.com', 'xyz@naver.com']
        }
      }
    },
    (set, get) => {
      return {
        setFirstEmail(newEmail: string) {
          const { user } = get()
          // user.address.emails[0] = newEmail
          set({
            user: {
              ...user,
              address: {
                ...user.address,
                emails: [newEmail, user.address.emails[1]]
              }
            }
          })
        }
      }
    }
  )
)
