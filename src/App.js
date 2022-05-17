import React, { useState } from 'react'
import './App.css';
import logo from './images/logo.svg'
import headerImage from './images/image-hero-desktop.jpg'
import headerImageMobile from './images/image-hero-mobile.jpg'
import check from './images/icon-check.svg'
import closeMenu from './images/icon-close-menu.svg'
import closeModal from './images/icon-close-modal.svg'
import hamburger from './images/icon-hamburger.svg'

import Top from './components/Top'
import Numbers from './components/Numbers'
import Detail from './components/Detail'
import Modal from './components/Modal'


function App() {

  const [selectedReward, setSelectedReward] = useState(null)
  console.log('selectedReward===>', selectedReward)

  return (
    <div className='font-commissioner bg-backgroundWhite'>

      <header>
        <img src={headerImage} alt='image of bamboo monitor riser' className='w-full' />
        <nav className='flex justify-between items-center py-12 pr-28 pl-44 absolute top-0 w-full' >
          <img src={logo} alt='crowdfund logo' />
          <ul className='flex font-medium cursor-pointer text-white'>
            <li className='px-6'>About</li>
            <li className='px-6'>Discover</li>
            <li className='px-6'>Get Started</li>
          </ul>
        </nav>
      </header>

      <main>
        <Top
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward}
        />
        <Numbers />
        <Detail
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward} />
      </main>

    </div>
  );
}

export default App;
