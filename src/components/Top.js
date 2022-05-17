import React, { useState } from 'react'
import mastercraftLogo from '../images/logo-mastercraft.svg'
import bookmarkIcon from '../images/icon-bookmark.svg'
import bookmarkedIcon from '../images/icon-bookmarked.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from './Modal'
import closeModalIcon from '../images/icon-close-modal.svg'
import closeModalHoveredIcon from '../images/icon-close-modal-hovered.svg'


function Top() {

  const [bookmarked, setBookmarked] = useState(false)

  return (
    <section className='bg-white w-6/12 mx-auto text-center pb-12 relative bottom-20 rounded-xl border-borderMiddle border-2 mb-6'>
      <img src={mastercraftLogo} alt='mastercraft logo' className='mx-auto relative bottom-8' />
      <h1 className='text-3xl font-bold mb-4 -mt-3'>Mastercraft Bamboo Monitor Riser</h1>
      <h2 className='text-darkGray'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h2>
      <div className='flex justify-around mt-8'>

        <Popup
          trigger={<button
            className='bg-moderateCyan px-10 rounded-full text-white font-semibold hover:bg-darkCyan'
          >Back this project</button>}
          modal
          nested
        >
          {close => (
            <div className='rounded-xl bg-white'>
              <div onClick={close}
                className='pt-5 px-5'>
                <img src={closeModalIcon}
                  className='ml-auto hover:sepia cursor-pointer' />
              </div>
              <Modal checked={'no reward'}/>
            </div>
          )}
        </Popup>





        {bookmarked
          ?
          <button
            className='flex items-center bg-borderMiddle pr-8 rounded-full text-darkCyan font-semibold'
            onClick={() => setBookmarked(!bookmarked)}
          >
            <img src={bookmarkedIcon} alt='bookmark icon'
              className='mr-4' />
            Bookmarked
          </button>
          :
          <button
            className='flex items-center bg-borderMiddle pr-8 rounded-full text-darkGray font-semibold'
            onClick={() => setBookmarked(!bookmarked)}
          >
            <img src={bookmarkIcon} alt='bookmark icon'
              className='mr-4' />
            Bookmark
          </button>
        }



      </div>
    </section>
  )
}

export default Top

