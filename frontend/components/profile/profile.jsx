import React from 'react'
import PostIndex from '../posts/post_index'
import ProfileHeader from './profileheader'

const Profile = () => {
  return (
    <div>
      <div>
        <ProfileHeader/>
        {/* Header */}
      </div>
      <div>
        {/* Index */}
        <PostIndex />
      </div>
    </div>
  )
}

export default Profile
