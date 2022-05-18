import React, { useState } from 'react'
import rewards from '../data.json'


function DefaultModal({
  selectedReward,
  setSelectedReward,
  pledgedPrice,
  setPledgedPrice,
  completeModal,
  setCompleteModal
}) {

  const [message, setMessage] = useState(null)

  console.log('pledgedPrice--->', pledgedPrice)
  console.log('selectedReward===>', selectedReward)

  const handleOnClick = (reward) => {
    setSelectedReward(reward.title || reward);
    setPledgedPrice(reward.price || null);
  }

  const handleSubmit = (reward) => {
    if (reward === 'no reward' && pledgedPrice < 1 && pledgedPrice !== null && pledgedPrice !== undefined) {
      setMessage(`please pledge at least $1`)
      setTimeout(() => (
        setMessage(null)
      ), 3000)
    } else if (selectedReward === 'no reward' && pledgedPrice >= 1) {
      setCompleteModal(true)
    }

    if (pledgedPrice < reward.price) {
      setMessage(`please pledge more than $ ${reward.price} for this reward`)
      setTimeout(() => (
        setMessage(null)
      ), 3000)
    } else if (pledgedPrice >= reward.price) {
      setCompleteModal(true)
    }
  }

  return (
    <div className='px-12 py-4 font-commissioner main-modal'>

      <h2 className='font-bold text-2xl'>Back this project</h2>
      <p className='text-darkGray py-4'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>


      <div className={selectedReward === 'no reward'
        ? 'border-2 border-moderateCyan rounded-xl'
        : 'border-2 border-borderLight rounded-xl'}>
        <div className='flex px-8 py-6 my-4'>
          <input
            type='radio'
            className='appearance-none rounded-full h-6 w-10 border-2 border-borderLight bg-white 
            hover:border-moderateCyan 
            checked:bg-moderateCyan checked:border-borderLight
             focus:outline-none
             align-top bg-no-repeat bg-center bg-contain float-left mr-6 cursor-pointer'
            id='pledge with no reward'
            name='typeOfReward'
            onClick={() => handleOnClick('no reward')}
          />
          <div>
            <label
              className='text-xl font-bold hover:text-moderateCyan cursor-pointer'
              htmlFor='pledge with no reward'>
              Pledge with no reward
            </label>
            <p className='text-darkGray mt-4'> Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
          </div>
        </div>
        {
          selectedReward === 'no reward'
            ?
            <div className='border-t-2 py-6 px-8
            duration-300'>
              <div className='flex justify-between items-center'>
                <p className='text-darkGray'>Enter your pledge</p>
                <div className=''>
                  <span className='text-darkGray relative left-8'>$</span>
                  <input
                    type='number'
                    onChange={(e) => setPledgedPrice(e.target.value)}
                    className='border py-4 rounded-full border-moderateCyan focus:border-2 focus:pt-3 outline-0 w-28 mr-4 pl-10 pr-6 font-semibold'
                  />
                  <button
                    className='bg-moderateCyan hover:bg-darkCyan py-4 px-6 rounded-full text-white font-semibold'
                    onClick={() => handleSubmit('no reward')}
                  >Continue</button>
                </div>
              </div>
              <p className='text-right text-red-500 text-xs relative right-36 pr-2 bottom-5'>{message}</p>
            </div>
            :
            <div className='h-0 duration-300'></div>
        }
      </div>



      {rewards.map((reward) =>
        <div
          className={reward.spotsLeft === 0
            ? 'border-2 border-borderLight rounded-xl my-4 opacity-30'
            : selectedReward === reward.title
              ? 'border-2 border-moderateCyan rounded-xl my-4'
              : 'border-2 border-borderLight rounded-xl  my-4'}
          key={reward.title}
        >
          <div className='flex px-8 py-10'>
            <input
              type='radio'
              className={reward.spotsLeft === 0
                ? 'appearance-none rounded-full h-6 w-10 border-2 border-borderLight bg-white mr-6'
                : 'appearance-none rounded-full h-6 w-10 border-2 border-borderLight bg-white hover:border-moderateCyan checked:bg-moderateCyan checked:border-borderLightfocus:outline-none align-top bg-no-repeat bg-center bg-contain float-left mr-6 cursor-pointer'}
              id={reward.title}
              name='typeOfReward'
              onClick={() => handleOnClick(reward)}
              disabled={reward.spotsLeft === 0 && true}
              checked={selectedReward === reward.title}
              readOnly
            />
            <div>
              <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                  <label
                    className={reward.spotsLeft === 0 ? 'text-xl font-bold'
                      : 'text-xl font-bold hover:text-moderateCyan cursor-pointer'}
                    htmlFor={reward.title}
                  >
                    {reward.title}
                  </label>
                  <h4 className='text-moderateCyan ml-6 font-semibold'>Pledge ${reward.price} or more</h4>
                </div>
                <div className='flex items-center'>
                  <h4 className='font-bold text-xl mr-2'>{reward.spotsLeft}</h4>
                  <p className='text-darkGray'>left</p>
                </div>
              </div>
              <p className='text-darkGray'>{reward.description}</p>
            </div>
          </div>
          {
            selectedReward === reward.title
              ?
              <div className=' border-t-2 py-6 px-8 duration-300 h-full'>
                <div className='flex justify-between items-center'>
                  <p className='text-darkGray'>Enter your pledge</p>

                  <div className=''>
                    <span className='text-darkGray relative left-8'>$</span>
                    <input
                      type='number'
                      defaultValue={reward.price}
                      onChange={(e) => setPledgedPrice(e.target.value)}
                      className='border py-4 rounded-full border-moderateCyan focus:border-2 focus:pt-3 outline-0 w-28 mr-4 pl-10 pr-6 font-semibold'
                    />
                    <button
                      className='bg-moderateCyan hover:bg-darkCyan py-4 px-6 rounded-full text-white font-semibold'
                      onClick={() => handleSubmit(reward)}
                    >Continue</button>
                  </div>
                </div>
                <p className='text-right text-red-500 text-xs relative right-16 bottom-5'>{message}</p>
              </div>
              :
              <div className='h-0 duration-300'></div>
          }
        </div>
      )}
    </div>

  )
}

export default DefaultModal