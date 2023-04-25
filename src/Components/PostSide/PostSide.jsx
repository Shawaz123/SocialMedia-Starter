import React from 'react'
import './PostSide.css'
import PostsShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const PostSide = () => {
  return (
    <div className='PostSide'>
     <PostsShare/>
     <Posts/>
    </div>
  )
}

export default PostSide
