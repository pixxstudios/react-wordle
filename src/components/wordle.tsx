import React, { useEffect, useState } from 'react'
import { useWordle } from '../hooks/use-wordle'
import { Grid } from './guess'
import { Keypad } from './keypad';
import { Modal } from './modal';

type WordleProps = {
    solution: string
}

export const Wordle = ({ solution }: WordleProps) => {
    const [showModal, setShowModal] = useState(false)
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      if (isCorrect || turn > 5) {
        setTimeout(() => setShowModal(true), 2000)
        window.removeEventListener('keyup', handleKeyup)
      }

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])
    
    return (
        <>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        <Keypad usedKeys={usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </>
    )
}
