import { useState } from 'react'
import './index.css'
import Form from './components/Form'
import Theme from './components/Theme'
import { ThemeProvider } from './components/context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Form/> */}
        <ThemeProvider>
          <Theme/>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
