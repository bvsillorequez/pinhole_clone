import React from 'react'

class Like extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      like: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    event.preventDefault()

    if (like) {
      this.setState ({ like: false})
      this.props.deleteLike(likeId) //I don't know where this like ID is coming from yet
    } else {
      this.setState ({ like: true })
      this.props.createLike(this.state)
    }
  }

  likeSym() {
    if (like) {
      <i class="fas fa-heart"></i>
    } else {
      <i class="far fa-heart"></i>
    }
  }

  render() {
    return (
      <div>
        <button className="like-button" onClick={this.handleClick}>{likeSym()}</button>
      </div>
    )
    }
}

export default Like