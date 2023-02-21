import React, { useState } from 'react';

type Props = {
    usedKeys: {[key:string]: string }
}

export const Keypad = ({usedKeys}: Props) => {
    const [letters, setLetters] = useState([
        {"key": "a"},
        {"key": "b"},
        {"key": "c"},
        {"key": "d"},
        {"key": "e"},
        {"key": "f"},
        {"key": "g"},
        {"key": "h"},
        {"key": "i"},
        {"key": "j"},
        {"key": "k"},
        {"key": "l"},
        {"key": "m"},
        {"key": "n"},
        {"key": "o"},
        {"key": "p"},
        {"key": "q"},
        {"key": "r"},
        {"key": "s"},
        {"key": "t"},
        {"key": "u"},
        {"key": "v"},
        {"key": "w"},
        {"key": "x"},
        {"key": "y"},
        {"key": "z"}
      ]);

    return (
        <div className='keypad'>
            {
                letters.map(letter => {
                    const color = usedKeys[letter.key]
                    return <div key={letter.key} className={color}>{letter.key}</div>
                })
            }
        </div>
    )
}