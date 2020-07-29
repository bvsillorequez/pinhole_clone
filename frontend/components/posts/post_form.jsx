import React from 'react'
import modal from '../modal/modal'
import { Redirect } from 'react-router-dom'

export default class PostForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body || '',
      user_id: this.props.post.user_id,
      photoFile:  [],
      photoUrl: [],
      redirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.deleteImg = this.deleteImg.bind(this)
    
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    
    const formData = new FormData()

    if (this.state.id){
      formData.append('post[id]', this.state.id)
    }
    formData.append('post[title]', this.state.title)
    formData.append('post[body]', this.state.body)
    formData.append('post[user_id]', this.state.user_id)
    if (this.state.photoFile) {
      for (let i = 0; i < this.state.photoFile.length; i++){
        formData.append("post[photo][]", this.state.photoFile[i])
      }
    }

    this.props.action(formData)
      .then(
        this.setState({
          title: '',
          body: '',
          photoFile: [],
          photoUrl: [],
          redirect: true,
        })
      )
    
  }

  handleFile(e){

    const files = Array.from(e.currentTarget.files);
    let newFiles = []

    files.forEach(file => {
      const fileReader = new FileReader();
     
      if (file) {
        fileReader.readAsDataURL(file);
      } else {
        this.setState({ photoUrl: [], photoFile: [] });
      }

      fileReader.onloadend = () => {
        newFiles.push(fileReader.result)
        this.setState({ photoUrl: newFiles, photoFile: files })
      }
    })
  }

  selectImg() {
    const selected = document.getElementsByClassName("upload-img")[0]
    selected.classList.toggle("selected")
  }

  deleteImg(e) {
    e.preventDefault()
    this.setState ({
      photoFile: [],
      photoUrl: [],
      redirect: true,
    })
    
  }

  deletePost() {
    const {post} = this.props
    return (
      <button className="deleteButton" onClick={()=> this.props.deletePost(post.id)}>
        Delete photo
      </button>
    )
  }

  addRemoveFeature () {
    return (
      <div className="photo-form-layout-add">
        <label>
          <i className="fas fa-plus"></i>
                  Add
                  <input
            type="file"
            accept="image/*"
            onChange={this.handleFile}
            multiple />
        </label>
        <label>
          <div onClick={this.props.removeModal}>
            <div onClick={this.deleteImg}>
              <i className="far fa-trash-alt"></i>
                      Remove
                    </div>
          </div>
        </label>
      </div>
    )
  }

  render() {
    const { formType, errors, post, cancelModal } = this.props 
    
    if (errors) { 
    const err = errors.map((error, i) => {
      return <li key={i}>{error}</li>
    })}
    
    let createButton = formType === 'Create Post' ? 'Upload' : 'Save Changes'
    
    const preview = this.state.photoUrl.map((url, i) => {
      return <li key={i}>
        <img className="upload-img"
            onClick={this.selectImg}
            src={url} />
        </li>
    })

    if (this.state.redirect) {
      return <Redirect to='/posts' /> 
    }
  
    return (
      <div className="post-form-top-container post-form-layout-parent">

        <div className="post-form-layout-child">
          <div className="post-form-layout-header">
            {formType === 'Create Post' ? 'Upload' : 'Photo manager'}
          </div>
        </div>
        <div className="post-form-layout-photo">
          <div className="post-form-layout-left">

            
            { formType === 'Create Post' ? this.addRemoveFeature() : ''}


            <div className="post-form-layout-grid">
              <div className="post-form-layout-grid-container">
                <ul className="post-form-layout-grid-container-photos" >
                  {formType === 'Create Post' ? preview : <img className="editImage"src={post.photoUrl}/>}
                </ul>
              </div>
            </div>
          </div>

        <div className="post-form-layout-right">
          <div className="post-form-parent">
            <div className="post-form-top">
                {this.state.photoFile.length > 0 ?  
                `${this.state.photoFile.length} photos selected` : ''} 
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className='post-form-first'>
                  <div className='post-form-inputs'>
                    <label>Title
                      <input
                          type="text"
                          onChange={this.update('title')}
                          value={this.state.title} />
                    </label>
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
                    {cancelModal}
                    <input type="submit" className='upload-button' value={createButton} />
                  </div>
                </div>
              
            </form>
          </div>
        </div>
        </div>
      </div>
    )
  }
}