import React, { useEffect } from 'react'
import { useWordle } from '../hooks/use-wordle'

type WordleProps = {
    solution: string
}

export const Wordle = ({ solution }: WordleProps) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)
    
    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    
    useEffect(() => {
        console.log(guesses, isCorrect, turn)
    }),[guesses, isCorrect, turn]    

    return (
        <div>{currentGuess}</div>
    )
}
