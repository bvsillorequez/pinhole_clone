import React from 'react';

class PostShow extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.postId !== this.props.match.params.postId) {
    this.props.fetchPost(this.props.match.params.postId)
    }
  }

  render () {
    if (!this.props.post) return null;

    const photoArray = Array.isArray(this.props.post.photoUrl) ? this.props.post.photoUrl : [this.props.post.photoUrl]

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
                <h5>{this.props.post.title}</h5>
                <h6>by {this.props.post.user}</h6>
                <p>Taken: {this.props.post.created_at}</p>
                <p>{this.props.post.body}</p>
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