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
       { guess ?
        guess.map((g, i) => <div key={i} className={g.color}>{g.key}</div>)
        : 
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
