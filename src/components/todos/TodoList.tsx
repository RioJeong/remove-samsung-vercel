import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/todos/TodoItem'

export default function TodoList() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <ul className="max-w-[400px]">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
