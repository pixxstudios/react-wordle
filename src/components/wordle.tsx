import React, { useEffect } from 'react'
import { useWordle } from '../hooks/use-wordle'
import { Grid } from './guess'
import { Keypad } from './keypad';

type WordleProps = {
    solution: string
}

export const Wordle = ({ solution }: WordleProps) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    
    return (
        <>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad />
        </>
    )
}
