import React from 'react'

const PostIndexPhotos = props => {
  return (
    <li>
      {props.post.title}
      <br/>
      {props.post.body}
      <br/>
      {props.post.user_id}
    </li>
  )
}

export default PostIndexPhotos;