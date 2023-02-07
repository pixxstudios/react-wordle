import React, { useEffect } from 'react'
import { useWordle } from '../hooks/use-wordle'

type WordleProps = {
    solution: string
}

export const Wordle = ({ solution }: WordleProps) => {
    const { currentGuess, handleKeyup } = useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    

    return (
        <div>{currentGuess}</div>
    )
}
