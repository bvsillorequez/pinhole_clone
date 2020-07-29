import React from 'react'
import { Link } from 'react-router-dom'
import { createLike } from '../../util/like_api_util'

const PostIndexPhotos = props => {

  let liked = false
  let count = 0
  let postLikeId = []
  
  for (let i = 0; i < props.like.length; i++) {
    if (props.like && props.post.id === props.like[i].post_id) {
      postLikeId.push(props.like[i].id)
      count++
      liked = true
    }
  }

  return (
    <li className='post-index-img-li'>
      <div className="like-container">
        <Link to={`/posts/${props.post.id}`}>
          <img className='post-index-img' src={props.post.photoUrl} />
        </Link>
        { liked ? 
          <div className="heart-title">
            <div>
              <button className="heart-button" onClick={() => props.deleteLike(postLikeId[0])}>
                  {<i className="fas fa-heart"></i>}
              </button> 
            </div>
            <div>{props.post.title}</div> 
          </div> : 
          <div className="heart-title">
            <div>
              <button className="heart-button" onClick={() => props.createLike(props.userId, props.post.id)}>
                  {<i className="far fa-heart"></i>}
              </button>
            </div>
            <div>{props.post.title}</div>
          </div>
        }
      </div>
    </li>
  )
}

export default PostIndexPhotos;