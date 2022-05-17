import React, { useState } from 'react'
import rewards from '../data.json'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from './Modal'
import closeModalIcon from '../images/icon-close-modal.svg'

function Reward() {

  const [selectedReward, setSelectedReward] = useState(null)

  // const button = (temp) => {
  //   return (
  //     <button
  //       className='bg-moderateCyan text-white font-semibold px-8 py-4 rounded-full hover:bg-darkCyan'
  //       onClick={() => setSelectedReward(temp)}
  //     >Select Reward</button>
  //   )
  // }

  return (
    <>
      {rewards.map((reward, key) =>
        <section
          className={reward.spotsLeft === 0
            ? 'border-2 border-borderDark p-8 rounded-xl mb-6 opacity-30'
            : 'border-2 border-borderDark p-8 rounded-xl mb-6'}
          key={reward.title}>
          <div className='flex justify-between mb-8'>
            <h2 className='font-bold text-xl'>{reward.title}</h2>
            <h3 className='text-moderateCyan font-medium'>Pledge ${reward.price}or more</h3>
          </div>

          <p className='text-darkGray mb-10'>{reward.description}</p>

          <div className='flex justify-between'>
            <div className='flex items-center'>
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
                    <Modal
                      temporarilyChecked={key}
                    />
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