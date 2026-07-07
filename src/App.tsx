import styles from './App.module.css'
import Button from '@/components/Button'

export default function App() {
  return (
    <>
      <h1 className={styles.title}>Hello, React!</h1>
      <Button>클릭!</Button>
    </>
  )
}
