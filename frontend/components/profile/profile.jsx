import React from 'react'
import PostIndex from '../posts/post_index'
import ProfileHeader from './profileheader'

const Profile = ({user, userId}) => {
  debugger
  return (
    <div>
      <div>
        <ProfileHeader user={user} userId={userId}/>
      </div>
      <div>
        <PostIndex />
      </div>
    </div>
  )
}

export default Profile
