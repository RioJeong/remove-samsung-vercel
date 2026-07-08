import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function Todos() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <ul>{todos.map()}</ul>
    </>
  )
}
