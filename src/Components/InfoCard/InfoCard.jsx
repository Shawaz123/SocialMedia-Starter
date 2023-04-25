import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModalJsx/ProfileModal'
const InfoCard = () => {
    const [modalOpened, setModalOpened]= useState(false)
  return (
    <div className='InfoCard'>
        <div className='InfoHead'>
            <h4>Your Info <div><UilPen width='2rem' onClick={()=>setModalOpened(true)} height='1.5rem'/></div></h4>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
        <div className='info'>
            <span><b>Status</b></span>
            <span> In Relationship</span>
        </div>
        <div className='info'>
            <span><b>Lives</b></span>
            <span> Delhi</span>
        </div>
        <div className='info'>
            <span><b>Works</b></span>
            <span> ATC</span>
        </div>

        <button className="button logout-button">Logout</button>
      
    </div>
  )
}

export default InfoCard
