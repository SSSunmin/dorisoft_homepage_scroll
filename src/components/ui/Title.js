import React from 'react';
import styled from './Title.module.css';

const Title = (props) => {
  return (
    <p
      id={props.id}
      className={props.maintitle ? styled.title : styled.subtitle}
      style={props.style ? props.style : null}
    >
      {props.children}
    </p>
  );
};
export default Title;
