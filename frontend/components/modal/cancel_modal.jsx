import React from 'react'
import { Link } from 'react-router-dom'

const CancelModal = ({closeModal}) => {
  return (
    <div className="upload-modal-container">
      <i className="fas fa-exclamation-triangle fa-5x"></i>
      <h3>You have unsaved changes</h3>
      <h5>
        Are you sure you want to leave without saving?  
        <br/>
        Your changes will be lost.
      </h5>
      <Link className='modal-link' to='/home' onClick={closeModal}>Leave without saving</Link>
      <button onClick={closeModal} >Cancel</button>
    </div>
  )
}

export default CancelModal