import React from 'react'
import './FollowerCard.css'
import { Followers} from '../../Data/FollowersData'
const FollowerCard = () => {
  return (
   <div className='FollowersCard'>
    <h3>Who is following you </h3>

{Followers.map((follower,id)=>{
  return(
    <div className='follower'>
      <div>
        <img src={follower.img} alt='' className='followersImg'/>
        <div>
          <span className='name'>{follower.name}</span>
          <span>@{follower.username}</span>
        </div>
      </div>
      <button className='button'>Follow</button>
    </div>
  )
})}

   </div>
  )
}

export default FollowerCard
