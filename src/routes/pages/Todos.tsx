import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function Todos() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const createTodo = useTodoStore(s => s.createTodo)

  useEffect(() => {
    fetchTodos()
  }, [])

  async function _createTodo() {
    await createTodo()
    fetchTodos()
  }

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          _createTodo()
        }}>
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </form>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
