import React from 'react'
import PostIndex from '../posts/post_index'
import PostIndexPhotos from '../posts/post_index_photos'

class ProfileHeader extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
    this.props.fetchPosts()
  }

  render () {

    const photos = this.props.posts.map(post => {
      if (post.user_id === this.props.session) {
        return <PostIndexPhotos key={post.id} post={post} />
      }
    })

    let count = 0
    photos.forEach(photo => {
      if (photo) count++
    })

    
    for (let i = (photos.length - 1); i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = photos[i]
      photos[i] = photos[j]
      photos[j] = temp
    }

    return (
      <div className="profile-parent-container">
        <div className="profile-header">
            <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=seaport-during-daytime-132037.jpg&fm=jpg" alt="header-image"/>
          
        </div>
        <div className="profile-picture">
          <img src="https://i0.wp.com/www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg?w=1200&ssl=1" alt="profile-image"/>
        </div>
        <div className="profile-user-info">
          {this.props.user.username}
        </div>
        <div>
          <div className="post-index-photos-conatiner">
            <div className="post-index-grid-container">
              <div className="post-index-grid-inner">
              <div className="your-uploads">
                Galleries({count})
              </div>
                <ul className="post-index-grid-container-photos" >
                  {photos}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileHeader