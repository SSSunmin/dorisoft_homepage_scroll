import React, { useEffect, useState } from 'react';
import logo from '../../../imgs/dorisoftLogo.png';
import styled from './Header.module.css';
import Topbar from './Topbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import DiviceTopBar from './DiviceTopBar';

export const menu = [
  { id: 'topbar_0', name: 'OUR CONTENTS' },
  { id: 'topbar_1', name: 'ABOUT' },
  { id: 'topbar_2', name: 'CONTACT US' },
];

const Header = (props) => {
  return (
    <>
      <div className={styled.Header}>
        <Link
          to="scroll-top"
          smooth="true"
          duration={2000}
          offset={-90}
          onClick={props.onClick}
        >
          <img alt="logo" src={logo} className={styled.logo} />
        </Link>
        <Topbar className={styled.Topbar} />
        <div className={styled.divice}>
          <GiHamburgerMenu onClick={props.TopbarHandler} />
        </div>
      </div>
    </>
  );
};

export default Header;
