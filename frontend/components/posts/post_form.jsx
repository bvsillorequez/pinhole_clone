import React from 'react'

export default class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body || '',
      user_id: this.props.post.user_id,
      photoFile:  null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();

    formData.append('post[title]', this.state.title);
    formData.append('post[body]', this.state.body);
    formData.append('post[user_id]', this.state.user_id);
    formData.append('post[photo]', this.state.photoFile);
    debugger
    this.props.action(formData)
      // .then(
      //   this.setState({
      //     title: '',
      //     body: '',
      //     photoFile: null,
      //   })
      // )
  }

  //image preview
  // handleFile(e){
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () =>
  //     this.setState({ imageUrl: reader.result, imageFile: file });

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ imageUrl: "", imageFile: null });
  //   }
  // }

  handleFile(e){
    this.setState({ photoFile: e.currentTarget.files[0]})
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
    debugger
    return (
      <div className="post-form-parent">
        <div className="post-form-top">
          1 photo selected
        </div>
        <form onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleFile}/>
            <div className='post-form-first'>
              <div className='post-form-inputs'>
                <label>Title
                  <input
                      type="text"
                      onChange={this.update('title')}
                      value={this.state.title} />
                </label>
                {/* {err ? err : ''} */}
                <label>Description
                  <textarea
                      onChange={this.update('body')}
                      value={this.state.body} />
                </label>
                {formType === 'Create Post' ? '' :
                  this.deletePost()}
              </div>
            </div>
            <div className="createButton">
              <div className="createButton-container">
                {/* Modal */}
                <input type="submit" className="cancel-button"value="Cancel" />
                {/* Modal */}
                <input type="submit" className='upload-button'value={createButton} />
              </div>
            </div>
          
        </form>
      </div>
    )
  }
}