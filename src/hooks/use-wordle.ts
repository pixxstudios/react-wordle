import { useState } from "react"

export const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // guesses as formatted array
    const [history, setHistory] = useState([]) // gusses as string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {}

    const addNewGuess = () => {}

    const handleKeyup = () => {}

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyup
    }
}