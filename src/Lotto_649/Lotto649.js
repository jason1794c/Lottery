import React, { useState } from 'react';
import gen649 from './649generator';

export default function Lotto649( {initialNumbers }) {
    const [numbers, setNumbers] = useState(initialNumbers)

    return(
        <div>
            <h2>{`${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}`}</h2>
            <button onClick={() => setNumbers(prevNumbers => gen649())}>Generate Numbers</button>
        </div>
    )
};



