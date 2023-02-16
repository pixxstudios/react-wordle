import '../index.css';

type RowProps = {
    guess?: {
        key: string,
        color: string
    }[]
    currentGuess?: string
}

export const Row = ({guess, currentGuess}: RowProps) => {
    if (guess) {
        return (
            <div className='row past'>
                {
                    guess.map((g, i) => (
                        <div key={i} className={g.color}>{g.key}</div>)
                    )
                }
            </div>
    )}
      
    if (currentGuess) {
        let letters = currentGuess.split('')

        return (
            <div className='row current'>
                {
                    letters.map((letter, i) => (
                        <div key={i} className='filled'>{letter}</div>
                    ))
                }
                {
                    [...Array(5-letters.length)].map((_, i) => (
                        <div key={i}></div>
                    ))
                }
            </div>
        )
    }

    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
