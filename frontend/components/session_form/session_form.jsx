import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoUserSubmit = this.demoUserSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  demoUserSubmit(e) {
    e.preventDefault()
    const demoUser = {
      username: 'demouser',
      password: '123456'
    }
    this.props.processForm(demoUser)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  signUp() {
    return (
      <div>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    )
  }

  login() {
    return (
      <div>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
      </div> 
    )
  }

  usernameError () {
      return (this.props.errors.map((error, i) => (
        error.includes('Username') ? <ul className ="error" key={i}>{error}</ul>  : ''
      )))
  }

  passwordError () {
      return (this.props.errors.map((error, i) => (
        error.includes('Password') ? <ul className="error" key={i}>{error}</ul>  : ''
      )))
  }

  render() {
    const { formType, errors } = this.props
    
    const LoginLink = (formType === 'signup') ? this.login() : this.signUp()
    
    const err = errors.map((error, i) => {
      return <label key={i}> {error}</label>
    })
    
    const submitButton = (formType === 'signup') ? 'Sign up' : 'Log in'

    return (
      <>
        
        
        <div className="login_form_div">
          {formType === 'login' && err.length > 0 && 
            <div onClick={this.props.closeModal} className="modal-errors">
              {err}
            </div>
          }

          <form onSubmit={this.handleSubmit} className="login_form">
            <h3>
              {formType === 'login' ? 'Log in to Pinhole': 'Join Pinhole'}
            </h3>
            <br/>
            <br/>
            <label>Email or Username*
              <br/>
              <input
                type="text"
                onChange={this.update('username')}
                value={this.state.username} />
            </label>
            <div className='errors-box'>{this.usernameError()}</div>
            <br/><br/>
            <label>Password*
              <br/>
              <input
                type="password"
                onChange={this.update('password')}
                value={this.state.password} />
            </label>
            <div className='errors-box'>{this.passwordError()}</div>  
            <br/><br/>
            <input 
              type="submit" 
              className="login_button" 
              value={submitButton} />
            <br/>
            {formType === 'login' && <input 
              type="submit" 
              onClick={this.demoUserSubmit} 
              className="login_button" 
              value='Demo User Login' />}
            <br/>
            <div className='form_question'>
              {LoginLink}
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default SessionForm;