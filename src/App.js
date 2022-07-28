import { useState } from "react"
import Content from "./Content"

function App() {
  const [colorValue, setColorValue] = useState('')
  return (
    <Content
      colorValue={colorValue}
      setColorValue={setColorValue}
    />
  )
}

export default App
