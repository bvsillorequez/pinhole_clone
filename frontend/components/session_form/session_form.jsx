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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>{formType === 'login' ? 'Log in to Pinhole': 'Join Pinhole'}</h3>
          <label>Username:
            <input
              type="text"
              onChange={this.update('username')}
              value={this.state.username} />
          </label>
          <label>Password:
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password} />
          </label>
          <input type="submit" value={formType} />
        </form>
        <br />
        {LoginLink}
        {errors ? errors : ''}
      </div>
    )
  }
}

export default SessionForm;