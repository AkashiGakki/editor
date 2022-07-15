import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MarkdownEditor from './components/MarkdownEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MarkdownEditor />
    </div>
  )
}

export default App
