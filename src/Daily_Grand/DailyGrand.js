import React, { useState } from 'react';
import DailyGen from './DailyGrandGen';

export default function DailyGrand({initialNumbers}) {
    const [numbers, setNumbers] = useState( {initialNumbers})

    return (
        <div>
            <h2>{`${numbers[0]}, ${numbers[1]}, ${numbers[2]}, ${numbers[3]}, ${numbers[4]}`}</h2>
            <h2><strong>GRAND NUMBER: </strong> {numbers[5]}</h2>
            <button onClick={() => setNumbers(prevNumbers => DailyGen())}>Generate Numbers</button>
        </div>
    )
}
