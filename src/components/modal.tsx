import React from 'react'

type Props = {
    isCorrect: boolean
    turn: number
    solution: string
}

export const  Modal = ({ isCorrect, turn, solution }: Props) => {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} guesses</p>
            </div>
        )}
         {!isCorrect && (
            <div>
                <h1>Oops!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time</p>
            </div>
        )}
    </div>
  )
}
