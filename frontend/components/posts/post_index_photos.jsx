import React from 'react'
import { Link } from 'react-router-dom'


class PostIndexPhotos extends React.Component {
  likeButton() {
    const { like, post, createLike, deleteLike, userId} = this.props
    let liked = false
    let count = 0
    let postLikeId = []
    
    if (like) {
      for (let i = 0; i < like.length; i++) {
        if (post.id === like[i].post_id) {
          postLikeId.push(like[i].id)
          count++
          liked = true
        }
      }
    }

    return (
       liked ?
          <div className = "heart-title">
            < div >
          <button 
            className="heart-button" 
            onClick={() => deleteLike(postLikeId[0])
          }>
            {<i className="fas fa-heart"></i>}
          </button> 
                </div >
          <div>{post.title}</div> 
              </div > :
        <div className="heart-title">
          <div>
            <button 
              className="heart-button" 
              onClick={() => createLike(userId, post.id)
            }>
              {<i className="far fa-heart"></i>}
            </button>
          </div>
          <div>{post.title}</div>
        </div>
      )
    }
  

  render() {
    const { post, like } = this.props
    return (
      <li className='post-index-img-li'>
        <div className="like-container">
          <Link to={`/posts/${post.id}`}>
            <img className='post-index-img' src={post.photoUrl} />
          </Link>
          {like ? this.likeButton() : ''}
        </div>
      </li>
    )
  }
}

// const PostIndexPhotos = props => {

//   let liked = false
//   let count = 0
//   let postLikeId = []
  
//   if (props.like) {
//     for (let i = 0; i < props.like.length; i++) {
//       if (props.post.id === props.like[i].post_id) {
//         postLikeId.push(props.like[i].id)
//         count++
//         liked = true
//       }
//     }
//   }

//   return (
//     <li className='post-index-img-li'>
//       <div className="like-container">
//         <Link to={`/posts/${props.post.id}`}>
//           <img className='post-index-img' src={props.post.photoUrl} />
//         </Link>
//         {liked ? 
//           <div className="heart-title">
//             <div>
//               <button className="heart-button" onClick={() => props.deleteLike(postLikeId[0])}>
//                   {<i className="fas fa-heart"></i>}
//               </button> 
//             </div>
//             <div>{props.post.title}</div> 
//           </div> : 
//           <div className="heart-title">
//             <div>
//               <button className="heart-button" onClick={() => props.createLike(props.userId, props.post.id)}>
//                   {<i className="far fa-heart"></i>}
//               </button>
//             </div>
//             <div>{props.post.title}</div>
//           </div>
//         }
//       </div>
//     </li>
//   )
// }

export default PostIndexPhotos;