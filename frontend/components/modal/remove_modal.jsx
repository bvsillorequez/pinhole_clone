import React from 'react'
import { Link } from 'react-router-dom'

const RemoveModal = ({ closeModal }) => {
  return (
    <div className="upload-modal-container">
      <i class="fas fa-exclamation-triangle fa-5x"></i>
      <h3>Remove photos</h3>
      <h5>
        Are you sure you want to remove these photos?
      </h5>
      <Link className='modal-link' to='/upload' onClick={closeModal}>Confirm and remove</Link>
      <button onClick={closeModal} >Cancel</button>
    </div>
  )
}

export default RemoveModal