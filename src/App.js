import React, { useState } from 'react'
import './App.css';

import Top from './components/Top'
import Numbers from './components/Numbers'
import Detail from './components/Detail'
import Header from './components/Header';


function App() {

  const [selectedReward, setSelectedReward] = useState(null)
  const [pledgedPrice, setPledgedPrice] = useState(null)


  return (
    <div className='font-commissioner bg-backgroundWhite '>
  
      <Header/>

      <main>
        <Top
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward}
          pledgedPrice={pledgedPrice}
          setPledgedPrice={setPledgedPrice}
        />

        <Numbers />

        <Detail
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward}
          pledgedPrice={pledgedPrice}
          setPledgedPrice={setPledgedPrice}
        />
      </main>

    </div>
  );
}

export default App;
