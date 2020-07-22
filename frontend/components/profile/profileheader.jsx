import React from 'react'

class ProfileHeader extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let user = this.props.userId
    this.props.fetchUser(user)
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default ProfileHeader