import { useEffect, useState } from "react"

import { Wordle } from "./components/wordle"

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(data => {
      const randomSolution = data[Math.floor(Math.random() * data.length)]
      setSolution(randomSolution.word)
    })
  }, [])

  return (
    <div className="App">
      <h1>Wordle (lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
