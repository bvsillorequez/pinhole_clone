import React from 'react'
import PostIndex from '../posts/post_index'
import ProfileHeader from './profileheader'

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileHeader/>
      </div>
      <div>
        <PostIndex />
      </div>
    </div>
  )
}

export default Profile
