import React from 'react'

export default class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body || '',
      user_id: this.props.post.user_id,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.action(this.state)
    this.setState({
      title: '',
      body: ''
    })
  }

  deletePost() {
    return (
      <button onClick={()=> this.props.deletePost(post.id)}>Delete photo</button>
    )
  }

  render() {
    const { formType, errors } = this.props 

    if (errors) { 
    const err = errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })}
    
    let createButton = formType === 'Create Post' ? 'Upload' : 'Save Changes'

    return (
      <form onSubmit={this.handleSubmit}>
        <br/><br/><br/><br/><br/><br/>
        <label>Title
          <input 
            type="text" 
            onChange={this.update('title')} 
            value={this.state.title}/>
        </label>
        {/* {err ? err : ''} */}
        <label>Description
          <textarea
            onChange={this.update('body')} 
            value={this.state.body}/>
        </label>
          { formType === 'Create Post' ? '' : 
            this.deletePost()}
        <div>
          {/* Modal */}
          <input type="submit" value="Cancel"/>  
          {/* Modal */}
          <input type="submit" value={createButton} />
        </div>
      </form>
    )
  }
}