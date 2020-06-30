import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CancelModal from './cancel_modal'
import RemoveModal from './remove_modal'

function Modal({ modal, closeModal }) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'cancel':
      component = <CancelModal closeModal={closeModal}/>;
      break;
    case 'remove':
      component = <RemoveModal closeModal={closeModal}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);