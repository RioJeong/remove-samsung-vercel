import type { Todo } from '@/stores/todo'
import { useState } from 'react'
import Button from '@/components/Button'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false)

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode() {
    setIsEditing(false)
  }

  return (
    <li className="flex items-center gap-2 border-b border-gray-300 px-1 py-1 hover:bg-gray-200">
      {isEditing ? (
        <>
          <div className="grow">수정 모드!</div>
          <Button onClick={() => offEditMode()}>취소</Button>
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
