import React, { useState, useEffect } from 'react'
import CompleteModal from './CompleteModal'
import DefaultModal from './DefaultModal'


//↓mobile用↓
import closeMenuIcon from '../images/icon-close-menu.svg'
import closeModalIcon from '../images/icon-close-modal.svg'


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