import React from 'react'

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

    const formData = new FormData()

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
    
    const preview = this.state.photoUrl.map((url, i) => {
      return <li key={i}>
        <img className="upload-img"
            onClick={this.selectImg}
            src={url} />
        </li>
    })

    return (
      <div className="post-form-top-container post-form-layout-parent">

        <div className="post-form-layout-child">
          <div className="post-form-layout-header">Upload</div>
        </div>
        <div className="post-form-layout-photo">
          <div className="post-form-layout-left">
            <div className="photo-form-layout-add">
              <label>
                <i className="fas fa-plus"></i>
                Add
                <input type="file" accept="image/*" onChange={this.handleFile} multiple />
              </label>
              <label>
                <i className="far fa-trash-alt"></i>
                Remove
                <input type="submit" onClick={this.deleteImg}/>
              </label>
            </div>
            <div className="post-form-layout-grid">
              <div className="post-form-layout-grid-container">
                <ul className="post-form-layout-grid-container-photos" >
                  {preview}
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
        </div>
        </div>
      </div>
    )
  }
}