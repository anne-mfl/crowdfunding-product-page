import React, { useState } from 'react'

function Numbers() {

  const [raisedAmount, setRaisedAmount] = useState(89914)
  const [targetAmount, setTargetAmount] = useState(100000)

  const achievementRatio = raisedAmount / targetAmount * 100


  return (
    <section className='bg-white
    lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12
    mx-auto p-14 relative bottom-20 rounded-xl border-borderMiddle border-2 mb-6'>
      <div className='flex justify-around'>
        <div>
          <h3 className='font-bold text-4xl mb-3'>$89,914</h3>
          <h4 className='text-darkGray'>of $100,000 backed</h4>
        </div>

        <div className='border-r-2 mx-1'></div>

        <div>
          <h3 className='font-bold text-4xl mb-3'>5,007</h3>
          <h4 className='text-darkGray'>total backers</h4>
        </div>

        <div className='border-r-2 mx-1'></div>

        <div>
          <h3 className='font-bold text-4xl mb-3'>56</h3>
          <h4 className='text-darkGray'>days left</h4>
        </div>
      </div>

      <div className='bg-borderLight rounded-full h-3 mt-10'>
        <div className='bg-moderateCyan rounded-full h-3 mt-10' style={{ width: `${achievementRatio}%` }}>&nbsp;</div>
      </div>
    </section>
  )
}

export default Numbers