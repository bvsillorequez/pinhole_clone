import React from 'react'
import PostIndexPhotos from './post_index_photos'

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  render () {

    if (!this.props.posts) return null;
    
    const photos = this.props.posts.map(post => {
      if (post.user_id === this.props.session) {
        return <PostIndexPhotos key={post.id} post={post}/>
      }
    })
    
    for (let i = (photos.length-1); i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = photos[i]
      photos[i] = photos[j]
      photos[j] = temp
    }
    
    return (
      <div className="post-index-photos-conatiner">
        <div className="post-index-grid-container">
          <div className="post-index-grid-inner">
            <ul className="post-index-grid-container-photos" >
              {photos}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PostIndex