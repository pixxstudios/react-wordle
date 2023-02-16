import React, { useEffect } from 'react'
import { useWordle } from '../hooks/use-wordle'
import { Grid } from './guess'

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
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    )
}
