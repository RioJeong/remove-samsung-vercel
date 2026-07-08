import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todo[]
    },
    set => {
      return {
        async fetchTodos() {
          const { data } = await axios.get<Todo[]>(
            'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
            {
              headers: {
                'content-type': 'application/json',
                apikey: 'KDT8_bcAWVpD8',
                username: 'KDT8_ParkYoungWoong'
              }
            }
          )
          set({ todos: data })
        }
      }
    }
  )
)
