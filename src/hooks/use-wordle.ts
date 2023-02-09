import { useState } from "react"

type FormatGuess = {
    key: string;
    color: string;
}[];

export const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState<FormatGuess[]>([]) // guesses as formatted array
    const [history, setHistory] = useState<string[]>([]) // gusses as string
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = (): FormatGuess => {
        const solutionArray: Array<string|null> = [...solution]
        const formattedGuess = [...currentGuess].map(letter => {
            return ({
                key: letter,
                color: 'grey'
            })
        })

        // find any green letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null;
            }
        })

        // find any yellow letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess: FormatGuess) => {
        console.log('solution ', solution)
        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        setGuesses([...guesses, formattedGuess])
        setHistory([...history, currentGuess])
        setTurn(turn + 1)
        setCurrentGuess('')
    }

    const handleKeyup = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            if(turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) return;
            const formattedGuess = formatGuess()
            addNewGuess(formattedGuess)
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