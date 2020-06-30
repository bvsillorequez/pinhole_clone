import React from 'react'
import { Link } from 'react-router-dom'

const PostIndexPhotos = props => {
  return (
    <li>
      <Link to={`/posts/${props.post.id}`}>
        <img className='post-index-img' src={props.post.photoUrl} />
      </Link>
    </li>
  )
}

export default PostIndexPhotos;