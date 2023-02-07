import { useState } from "react"

export const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // guesses as formatted array
    const [history, setHistory] = useState([]) // gusses as string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {}

    const addNewGuess = () => {}

    const handleKeyup = (e: KeyboardEvent) => {
        if(e.key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
        }

        if(/^[a-zA-Z]$/.test(e.key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev + e.key)
            }
        }
    }

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyup
    }
}