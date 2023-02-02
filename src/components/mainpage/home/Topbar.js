import React from 'react';
import styled from './Topbar.module.css';
import { Link } from 'react-scroll';

const Topbar = () => {
  const menu = [
    { id: 'topbar_0', name: 'OUR CONTENTS' },
    { id: 'topbar_1', name: 'ABOUT' },
    { id: 'topbar_2', name: 'CONTACT US' },
  ];

  return (
    <>
      <div className={styled.Topbar}>
        {menu.map((data, idx) => (
          <Link
            className={styled.menunav}
            key={data.id}
            to={`scroll_${idx}`}
            smooth="true"
            duration={2000}
            offset={-50}
          >
            <span className={styled.menu} onClick={data.onMoveScroll}>
              {data.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Topbar;
