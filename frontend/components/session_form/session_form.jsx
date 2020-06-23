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
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.processForm(this.state);
    // this.setState({
    //   username: '',
    //   password: ''
    // })
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

  render() {
    const { formType, errors } = this.props
    const LoginLink = (formType === 'signup') ? this.login() : this.signUp()
    return (
      <div className="login_form_div">
        <form onSubmit={this.handleSubmit} className="login_form">
          <h3>
            {formType === 'login' ? 'Log in to Pinhole': 'Join Pinhole'}
          </h3>
          <br/>
          <label>Email or Username*
            <br/>
            <input
              type="text"
              onChange={this.update('username')}
              value={this.state.username} />
          </label>
          <br/><br/>
          <label>Password*
            <br/>
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password} />
          </label>
          <br/><br/>
          <input type="submit" className="login_button" value={formType} />
          <br/><br/>
          <input type="submit" className="fb_button" value='Log in with Facebook' />
          <br/>
          <input type="submit" className="google_button "value='Log in with Google' />
          <br/><br/><br/>
          <div className='form_question'>
            {LoginLink}
            {errors ? errors : ''}
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;