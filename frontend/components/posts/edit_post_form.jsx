import React from 'react'
import PostForm from './post_form'

export default class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
  }

  render() {
    const { action, formType, post, session } = this.props;
    if (!post || post.user_id !== session ) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}