import { useState } from "react"

export type FormatGuess = {
    key: string;
    color: string;
}[];

export const useWordle = (solution: string) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState<FormatGuess[]>([...Array(6)]) // guesses as formatted array
    const [history, setHistory] = useState<string[]>([]) // gusses as string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

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
        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        setGuesses(prevGuesses => {
            const newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory(prevHistory => {
            return [...prevHistory, currentGuess]
        })

        setUsedKeys((prevUsedKeys) => {
            let newKeys: { [key: string]: string } = {...prevUsedKeys}

            formattedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key]

                if (letter.color === 'green') {
                    newKeys[letter.key] = 'green';
                    return;
                }

                if (letter.color === 'yellow' && currentColor !== 'green') {
                    newKeys[letter.key] = 'yellow';
                    return;
                }

                if (letter.color === 'grey' && currentColor !== 'yellow' && currentColor !== 'green') {
                    newKeys[letter.key] = 'grey';
                    return;
                }
            })

            return newKeys
        })

        setTurn(prevTurn => prevTurn + 1)
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
        handleKeyup,
        usedKeys
    }
}