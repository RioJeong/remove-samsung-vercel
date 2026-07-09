import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import TextField from '@/components/TextField'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const updateTodo = useTodoStore(s => s.updateTodo)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode(title = todo.title) {
    setIsEditing(false)
    setTitle(title)
  }
  async function _updateTodo() {
    if (!title.trim()) return
    if (title === todo.title) return
    await updateTodo({
      ...todo,
      title
    })
    fetchTodos()
    offEditMode(title)
  }

  return (
    <li className="flex items-center gap-2 border-b border-gray-300 px-1 py-1 hover:bg-gray-200">
      {isEditing ? (
        <>
          <TextField
            ref={inputRef}
            className="grow"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Button onClick={() => offEditMode()}>취소</Button>
          <Button onClick={() => _updateTodo()}>저장</Button>
          <Button onClick={() => {}}>삭제</Button>
        </>
      ) : (
        <>
          <div className="grow">{todo.title}</div>
          <Button onClick={() => onEditMode()}>수정</Button>
        </>
      )}
    </li>
  )
}
