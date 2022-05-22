import React, { useState } from 'react'
import logo from '../images/logo.svg'
import headerImage from '../images/image-hero-desktop.jpg'
import headerImageMobile from '../images/image-hero-mobile.jpg'
import closeMenu from '../images/icon-close-menu.svg'
import closeModal from '../images/icon-close-modal.svg'
import hamburger from '../images/icon-hamburger.svg'


function Header({openMenu, setOpenMenu}) {

  // const [openMenu, setOpenMenu] = useState(false)


  return (
    <header>
      <img
        src={headerImage}
        alt='image of bamboo monitor riser'
        className='hidden md:block md:w-full' />

      <img
        src={headerImageMobile}
        alt='image of bamboo monitor riser'
        className='w-full md:hidden' />

      <nav className=''>
        <div className='flex justify-around items-center absolute top-0 py-12 w-full'>
          <img src={logo} alt='crowdfund logo' className='z-20' />

          <ul className='hidden md:flex md:font-medium md:cursor-pointer md:text-white '>
            <li className='px-6'>About</li>
            <li className='px-6'>Discover</li>
            <li className='px-6'>Get Started</li>
          </ul>

          <img
            src={openMenu ? closeMenu : hamburger}
            alt='menu icon'
            className='md:hidden hover:cursor-pointer z-20'
            onClick={() => setOpenMenu(!openMenu)} />
        </div>

        {
          openMenu &&
          <div className='flex justify-center w-full h-full   bg-black bg-opacity-70 z-10 absolute top-0'>
            <div className='z-10 rounded-xl bg-white absolute top-24 w-10/12 mx-auto '>
              <ul className='font-semibold'>
                <li className='py-3 pl-6 border-b border-borderLight cursor-pointer'>About</li>
                <li className='py-3 pl-6 border-b border-borderLight cursor-pointer'>Discover</li>
                <li className='py-3 pl-6 cursor-pointer'>Get Started</li>
              </ul>
            </div>
          </div>
        }

      </nav>



    </header>

  )
}

export default Header