import React from 'react';

export default class PostShow extends React.Component {
  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
  }

  render () {
    return (
      <div>
        <img src=""/>
        <div className="post-info">
          <h5>{this.props.post.title}</h5>
          <h6>by: {this.props.post.user_id.username}</h6>
          <p>Taken: {this.props.post.created_at}</p>
          <p>{this.props.post.body}</p>
        </div>
        <div className="post-comments">
          {/* THIS WILL BE A COMMENT CONTAINER */}
        </div>
      </div>
    )
  }
}