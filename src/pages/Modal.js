import React, { useState } from 'react'
import CompleteModal from './CompleteModal'
import DefaultModal from './DefaultModal'


function Modal({ selectedReward, setSelectedReward, pledgedPrice, setPledgedPrice, close }) {

  const [completeModal, setCompleteModal] = useState(false)


  return (
    <>
      {completeModal
        ?
        <CompleteModal
          close={close} />
        :
        <DefaultModal
          selectedReward={selectedReward} setSelectedReward={setSelectedReward}
          pledgedPrice={pledgedPrice}
          setPledgedPrice={setPledgedPrice}
          completeModal={completeModal}
          setCompleteModal={setCompleteModal}
        />
      }
    </>
  )
}

export default Modal