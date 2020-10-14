import React, { useState } from 'react';
import numGen from './number_generator';

export default function LottoMax( {initialNumbers }) {
    const [numbers, setNumbers] = useState(initialNumbers)

    return(
        <div>
            <h2>{`${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}, ${numbers[5]}, ${numbers[6]}`}</h2>
            <button onClick={() => setNumbers(prevNumbers => numGen())}>Generate Numbers</button>
        </div>
    )
};