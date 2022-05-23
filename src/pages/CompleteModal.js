import React from 'react'
import checkIcon from '../images/icon-check.svg'

function CompleteModal({close}) {
  return (
    <div className='bg-white text-center font-commissioner my-8 sm:mx-12 mx-3'>
      <img src={checkIcon} alt='check icon' className='m-auto' />
      <h1 className='font-bold text-xl mt-8 mb-4'>Thanks for your support!</h1>
      <p className='text-darkGray'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
      <button
        className='mt-6 bg-moderateCyan hover:bg-darkCyan text-white font-semibold px-8 py-3 rounded-full'
        onClick={close}>Got it!</button>
    </div>
  )
}

export default CompleteModal