import React from 'react'
import PostIndexPhotos from './post_index_photos'
import CreatePostFormContainer from './create_post_form_container'
import EditPostFormContainer from './edit_post_form_container'

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  render () {
    
    const photos = this.props.posts.map(post => {
      if (post.user_id === this.props.session) {
        return <PostIndexPhotos key={post.id} post={post}/>
      }
    })
    
    return (
      <div className="post-index-photos-conatiner">
        <div className="post-index-grid-container">
          <ul className="post-index-grid-container-photos" >
            {photos}
          </ul>
        </div>
      </div>
    )
  }
}
export default PostIndex