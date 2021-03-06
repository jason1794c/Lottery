import React from 'react';
import './App.css';
import LottoMax from './Lotto_Max/Lotto_MAX';
import numGen from './Lotto_Max/number_generator';
import Lotto649 from './Lotto_649/Lotto649';
import gen649 from './Lotto_649/649generator';
import lottoMaxPic from './Lotto_Max_Logo.png';
import lotto649Pic from './1200px-Lotto_649_logo.svg.png';
import DailyGrand from './Daily_Grand/DailyGrand';
import DailyGen from './Daily_Grand/DailyGrandGen';
import dailyGrandLogo from './daily-grand-bonus-draw-3x2.png';


function App() {
  return (
    <div className="App">
      <div className='column' id='max'>
        <img className='LottoMax' src={lottoMaxPic} alt='Lotto MAX Winning Numbers!' />
        <LottoMax initialNumbers={numGen} />
      </div>
      <div className='column' id='lotto649'>
        <img className='Lotto649' src={lotto649Pic} alt='Lotto 649 Winning Numbers!' />
        <Lotto649 initialNumbers={gen649} />
      </div>
      <div className='column' id='DG'>
        <img className='DailyGrand' src={dailyGrandLogo} alt='Daily Grand Winning Numbers!' />
        <DailyGrand initialNumbers={DailyGen} />
      </div>
    </div>
  );
}

export default App;
