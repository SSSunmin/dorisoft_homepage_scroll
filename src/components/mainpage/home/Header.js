import React, { useState } from 'react';
import logo from '../../../imgs/dorisoftLogo.png';
import styled from './Header.module.css';
import Topbar from './Topbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Header = (props) => {
  return (
    <>
      <div className={styled.Header}>
        <Link to="scroll-top" smooth="true" duration={2000} offset={-90}>
          <img alt="logo" src={logo} className={styled.logo} />
        </Link>
        <Topbar className={styled.Topbar} onMoveScroll={props.onMoveScroll} />
        <div className={styled.divice}>
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
