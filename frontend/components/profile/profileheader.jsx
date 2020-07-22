import React from 'react'

class ProfileHeader extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  render () {
    debugger
    return (
      <div>
        <div className="profile-header">
          <div>
            <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=seaport-during-daytime-132037.jpg&fm=jpg" alt="header-image"/>
          </div>
        </div>
        <div className="profile-picture">
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/55550428e4b0d770e3f981ab/1540229270362-EIHH84QIIQYMWCEB2QVP/ke17ZwdGBToddI8pDm48kDEDYh4Y0JGhR6hzuwcJ44gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcz6bs2FkMoqlrQIzq4g5ogDqXr_T7rMikH_TfPkEE4wwzGwe9KEhUq6A0DxOZf-75/cool+corporate+headshot+in+denver?format=500w" alt="profile-image"/>
          </div>
        </div>
        <div>
          {this.props.user.username}
        </div>
      </div>
    )
  }
}

export default ProfileHeader