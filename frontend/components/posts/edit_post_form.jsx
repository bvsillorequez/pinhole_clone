import React from 'react'
import PostForm from './post_form'

export default class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId)
  }

  render() {
    const { action, formType, post, session, deletePost, cancelModal, closeModal } = this.props;
  
    if (!post || post.user_id !== session) return null;

    return (
      <div>
        <div>
          <PostForm
            action={action}
            formType={formType}
            post={post}
            deletePost={deletePost} 
            cancelModal= {cancelModal}
            closeModal= {closeModal}/>
        </div>
      </div>
    );
  }
}