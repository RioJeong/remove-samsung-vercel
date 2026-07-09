import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const createTodo = useTodoStore(s => s.createTodo)

  async function _createTodo() {
    await createTodo()
  }

  return (
    <>
      <form
        className="flex max-w-[500px] items-center gap-2"
        onSubmit={e => {
          e.preventDefault()
          _createTodo()
        }}>
        <TextField
          className="w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit">추가</Button>
      </form>
    </>
  )
}
