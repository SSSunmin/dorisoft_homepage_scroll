import React from 'react';
import ReactDOM from 'react-dom';
import styled from './Modal.module.css';
import Card from './Card';

const BackDrop = (props) => {
  return <div className={styled.BackDrop} onClick={props.OffPopup} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styled.ModalBackground}>
      <div className={styled.Modal}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop OffPopup={props.OffPopup} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
export default Modal;
