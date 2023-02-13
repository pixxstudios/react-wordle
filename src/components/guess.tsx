import React from 'react'
import { FormatGuess } from '../hooks/use-wordle'
import { Row } from './row'

type GuessProps = {
    currentGuess: string
    guesses: FormatGuess[]
    turn: number
}

export const Guess = ({ currentGuess, guesses, turn }: GuessProps) => {
  return (
    <div>
        {
            guesses.map((guess, index) => <Row key={index} guess={guess} />)
        }
    </div>
  )
}
