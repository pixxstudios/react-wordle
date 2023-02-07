import { useState } from "react"

export const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // guesses as formatted array
    const [history, setHistory] = useState<string[]>([]) // gusses as string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('formatting ', currentGuess)
    }

    const addNewGuess = () => {}

    const handleKeyup = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            if(turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) return;
            formatGuess()
        }

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