import React from 'react'
import { Link } from 'react-router-dom'
import { createLike } from '../../util/like_api_util'

const PostIndexPhotos = props => {
  // debugger

  // let liked
  // if (props.like) {
  //   liked = true
  // } else {
  //   liked = false
  // }


  return (
    <li className='post-index-img-li'>
      <Link to={`/posts/${props.post.id}`}>
        <img className='post-index-img' src={props.post.photoUrl} />
      </Link>
      {/* { liked ? 
        <button onClick={() => props.deleteLike(props.likes.id)}>
          {<i className="fas fa-heart"></i>}
        </button> : 
        <button onClick={() => props.createLike(props.userId, props.post.id)}>
          {<i className="far fa-heart"></i>}
        </button>
      } */}
    </li>
  )
}

export default PostIndexPhotos;