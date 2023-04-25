import React from 'react'

import InfoCard from '../InfoCard/InfoCard'
import FollowerCard from '../FollowerCard/FollowerCard'
import LogoSearch from '../LogoSearch/LogoSearch'


const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <InfoCard/>
      <FollowerCard/>

      
    </div>
  )
}

export default ProfileLeft
