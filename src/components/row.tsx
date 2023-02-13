import React from 'react'
import '../index.css';

type RowProps = {
    guess: {
        key: string,
        color: string
    }[]
}

export const Row = ({guess}: RowProps) => {
  return (
    <div className='row'>
       { guess ? guess.map(g => <div>{g.key}</div>) : 
        <>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </>
    }
    </div>
  )
}
