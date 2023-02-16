import { FormatGuess } from '../hooks/use-wordle'
import { Row } from './row'

type GridProps = {
    currentGuess: string
    guesses: FormatGuess[]
    turn: number
}

export const Grid = ({ currentGuess, guesses, turn }: GridProps) => {
  return (
    <div>
        {
            guesses.map((guess, index) => <Row key={index} guess={guess} />)
        }
    </div>
  )
}
