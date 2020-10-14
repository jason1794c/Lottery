import React from 'react';
import './App.css';
import LottoMax from './Lotto_Max/Lotto_MAX';
import numGen from './Lotto_Max/number_generator';
import Lotto649 from './Lotto_649/Lotto649';
import gen649 from './Lotto_649/649generator';
import lottoMaxPic from './111573-posts.feature_sm.jpg';

function App() {
  return (
    <div className="App">
      <img src={lottoMaxPic} alt='Lotto MAX Winning Numbers!'/> 
      <LottoMax initialNumbers={numGen} />
      <></>
      <h1>Lotto 649 Numbers!!</h1>
      <Lotto649 initialNumbers={gen649} />
    </div>
  );
}

export default App;
