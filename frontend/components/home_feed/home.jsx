import React from 'react'
import PostIndexPhotos from '../posts/post_index_photos'

class HomeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchLikes()
  }

  render() {
    if (!this.props.posts) return null;
    
    const photos = this.props.posts.map(post => {
      return <PostIndexPhotos key={post.id} post={post} like={this.props.like} createLike={this.props.createLike} deleteLike={this.props.deleteLike} userId={this.props.session}/>
    })
    
    // random feed generator
    // for (let i = (photos.length - 1); i > 0; i--) {
    //   const j = Math.floor(Math.random() * i)
    //   const temp = photos[i]
    //   photos[i] = photos[j]
    //   photos[j] = temp
    // }

    return (
            <ul className="home-grid-container-photos" >
              {photos}
            </ul>
    )
  }
}
export default HomeIndex