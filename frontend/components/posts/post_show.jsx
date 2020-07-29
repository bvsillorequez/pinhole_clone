import React from 'react';
import {Link} from 'react-router-dom'

class PostShow extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
    this.props.fetchLikes()
  }

  componentDidUpdate(prevProps){
    
    if (prevProps.match.params.postId !== this.props.match.params.postId) {
      this.props.fetchPost(this.props.match.params.postId)
    }
  }

  addRemove() {
    const {like, post, deleteLike, createLike, session } = this.props
    let liked = false
    let postLikeId = []
    
    for(let i = 0; i < like.length; i++) {
      if (like && post.id === like[i].post_id) {
        postLikeId.push(like[i].id)
        liked = true
      }
    }

    if (post.user_id === session) {
      return (
        <div className="post-show-navbar">
          <Link to='/upload'>
            <i className="far fa-plus-square fa-lg"></i>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <i className="far fa-edit fa-lg"></i>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="post-show-navbar">
          {
            liked ?
              <button className='heart-button' 
              onClick={() => deleteLike(postLikeId[0])}>
                {<i className="fas fa-heart fa-2x"></i>}
              </button> :
              <button className='heart-button' 
              onClick={() => createLike(session, post.id)}>
                {<i className="far fa-heart fa-2x"></i>}
              </button>
          }
        </div>
      )
    }
  }

  render () {
    const { post } = this.props
    if (!post) return null;

    const photoArray = Array.isArray(post.photoUrl) ? post.photoUrl : [post.photoUrl]

    const photo = photoArray.map((url, i) => {
      return <img src={url} key={i} className='post-show-img'/>
    })
    
    return (
      <>
        <div className="post-show-parent-container">
          <div className='post-show-index'>
            <div className='post-show-image-container'>
              <div className='post-show-photo-control'>
                {photo}
              </div>
            </div>
            <div className='post-show-info-parent'> 
            
              <div className="post-show-info">
                
                {this.addRemove()}

                <h5>{post.title}</h5>
                <h6>by {post.user}</h6>
                <p>Taken: {post.created_at}</p>
                <p>{post.body}</p>
              </div>
              <div className="post-comments">
                {/* THIS WILL BE A COMMENT CONTAINER */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PostShow