import React from 'react'
import rewards from '../data.json'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from '../pages/Modal'
import closeModalIcon from '../images/icon-close-modal.svg'

function Reward({ selectedReward, setSelectedReward, pledgedPrice, setPledgedPrice }) {

  const handleOnOpen = (reward) => {
    setSelectedReward(reward.title)
    setPledgedPrice(reward.price)
  }

  return (
    <>
      {rewards.map((reward) =>
        <section
          className={reward.spotsLeft === 0
            ? 'border-2 border-borderDark sm:px-8 px-4 py-8 rounded-xl mb-6 opacity-30'
            : 'border-2 border-borderDark sm:px-8 px-4 py-8 rounded-xl mb-6'}
          key={reward.title}>
          <div className='sm:flex justify-between items-center mb-8'>
            <h2 className='font-bold text-xl mb-2'>{reward.title}</h2>
            <h3 className='text-moderateCyan font-medium'>Pledge ${reward.price}or more</h3>
          </div>

          <p className='text-darkGray mb-10'>{reward.description}</p>

          <div className='sm:flex justify-between'>
            <div className='flex items-center mb-3 sm:mb-0'>
              <h4 className='font-bold text-3xl mr-3'>{reward.spotsLeft}</h4>
              <p className='text-darkGray'>left</p>
            </div>
            {reward.spotsLeft === 0
              ?
              <button className='bg-darkGray text-white font-semibold px-8 py-4 rounded-full'>Out of stock</button>
              :

              <Popup
                trigger={
                  <button
                    className='bg-moderateCyan text-white font-semibold px-8 py-4 rounded-full hover:bg-darkCyan'
                  >Select Reward</button>
                }
                onOpen={() => handleOnOpen(reward)}
                modal
              >
                {close => (
                  <div className='rounded-xl bg-white'>
                    <div onClick={close}
                      className='pt-5 px-5'>
                      <img src={closeModalIcon} alt='close icon'
                        className='ml-auto hover:sepia cursor-pointer' />
                    </div>

                    <Modal
                      selectedReward={selectedReward}
                      setSelectedReward={setSelectedReward}
                      pledgedPrice={pledgedPrice}
                      setPledgedPrice={setPledgedPrice}
                      close={close}
                    />

                    <div clasName=''>&nbsp;</div>
                  </div>
                )}
              </Popup>

            }
          </div>
        </section>
      )
      }
    </>
  )
}

export default Reward