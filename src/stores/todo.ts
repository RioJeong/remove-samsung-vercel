import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

const todoApi = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todo[],
      title: ''
    },
    (set, get) => {
      function setTitle(title: string) {
        set({ title })
      }
      async function fetchTodos() {
        const { data } = await todoApi.get<Todo[]>('/')
        set({ todos: data })
      }
      async function createTodo() {
        const { title, todos } = get()
        if (!title.trim()) return
        const { data } = await todoApi.post<Todo>('/', {
          title
        })
        set({
          title: '',
          todos: [data, ...todos]
        })
      }
      async function updateTodo(todo: Todo) {
        try {
          const { todos } = get()
          todoApi.put(`/${todo.id}`, todo)
          set({
            todos: todos.map(t => {
              return t.id === todo.id ? todo : t
            })
          })
        } catch (error) {
          console.error(error)
        }
      }
      async function deleteTodo(todo: Todo) {
        const { todos } = get()
        todoApi.delete(`/${todo.id}`)
        set({
          todos: todos.filter(t => {
            return t.id !== todo.id
          })
        })
      }
      return {
        setTitle,
        fetchTodos,
        createTodo,
        updateTodo,
        deleteTodo
      }
    }
  )
)
