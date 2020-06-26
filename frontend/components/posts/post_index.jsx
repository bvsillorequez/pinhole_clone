import React from 'react'
import PostIndexPhotos from './post_index_photos'
import CreatePostFormContainer from './create_post_form_container'

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
      <div>
        <ul>
          <br/><br/><br/><br/><br/>
          {photos}
        </ul>
        <div>
          <CreatePostFormContainer/>
        </div>
      </div>
    )
  }
}
export default PostIndex