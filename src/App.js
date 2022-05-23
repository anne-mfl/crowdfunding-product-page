import React, { useState } from 'react'
import './App.css';

import Top from './components/Top'
import Numbers from './components/Numbers'
import Detail from './components/Detail'
import Header from './components/Header';
import Modal from './pages/Modal'


function App() {

  const [selectedReward, setSelectedReward] = useState(null)
  const [pledgedPrice, setPledgedPrice] = useState(null)
  // const [openMenu, setOpenMenu] = useState(false)


  return (
    <div className='font-commissioner bg-backgroundWhite'>
    {/* <div className={openMenu
      ? 'font-commissioner bg-backgroundWhite h-screen overflow-y-hidden'
      : 'font-commissioner bg-backgroundWhite'
    }> */}

      <Header
        // openMenu={openMenu}
        // setOpenMenu={setOpenMenu}
      />

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
