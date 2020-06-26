import React from 'react'

export default class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.post
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

  render() {
    const { formType, errors } = this.props 

    const err = errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })
    let createButton = formType === 'Create Post' ? 'Upload' : 'Save Changes'
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input 
            type="text" 
            onChange={this.update('title')} 
            value={this.state.title}/>
        </label>
        {err}
        <label>Description
          <textarea
            onChange={this.update('body')} 
            value={this.state.body}/>
        </label>
        { formType === 'Create Post' ? '' : 
          <input type="submit" value="Delete Photo"/> }
        <div>
          <input type="submit" value={createButton}/>
          {/* Modal */}
          <input type="submit" value="Cancel"/>  
          {/* Modal */}
        </div>
      </form>
    )
  }
}