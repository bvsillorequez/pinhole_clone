import React from 'react'

const PostIndexPhotos = props => {
  return (
    <li>
      {/* {props.post.photoUrl ? <img src={props.post.photoUrl} alt=""/> : ''} */}
      <br/>
      Post ID:{props.post.id}
      <br/>
      {props.post.title}
      <br/>
      {props.post.body}
      <br/>
      User ID: {props.post.user_id}
      <br/>
    </li>
  )
}

export default PostIndexPhotos;