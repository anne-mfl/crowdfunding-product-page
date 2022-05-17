import React from 'react'
import Reward from './Reward'

function Detail({ selectedReward, setSelectedReward, pledgedPrice, setPledgedPrice }) {
  return (
    <section className='bg-white w-6/12 mx-auto p-12 relative bottom-20 rounded-xl border-borderMiddle border-2'>
      <h2 className='text-2xl font-bold mb-10'>About this project</h2>
      <p className='text-darkGray leading-8 mb-12'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br /><br />
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
        to allow notepads, pens, and USB sticks to be stored under the stand.</p>

      <Reward
        selectedReward={selectedReward}
        setSelectedReward={setSelectedReward}
        pledgedPrice={pledgedPrice}
        setPledgedPrice={setPledgedPrice}
      />

    </section>
  )
}

export default Detail