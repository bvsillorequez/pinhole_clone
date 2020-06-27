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
      <div className="post-index-parent">
        <div className="post-index-child">
          <div className="post-index-header">Upload</div>
          <div className="photo-index-add">
            <label>
              <i className="fas fa-plus"></i>
              Add 
              <input type="file" accept="image/*"/>
            </label>
            <label> 
              <i className="far fa-trash-alt"></i>
              Remove
            </label>
          </div>
        </div>
        <div className="post-index-photos">
          <div className="post-index-grid">
            <ul>
              {photos}
            </ul>
          </div>
          <div className='post-index-form'>
              <CreatePostFormContainer/>
          </div>
        </div>
      </div>
    )
  }
}
export default PostIndex