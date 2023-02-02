import React, { useState, useEffect, useRef } from 'react';
import styled from './Organization.module.css';
import {
  CEO,
  department,
  subdepartment,
  circle,
  arrow,
  arrow_line,
} from '../../util/imgIndex';
import Title from '../../ui/Title';

const Organization = () => {
  const [isPlayCEOAni, SetisPlayCEOAni] = useState(true);
  const [targetdiv, setTargetDiv] = useState([]);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        SetisPlayCEOAni(false);
      }
    },
    {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.5,
    }
  );

  useEffect(() => {
    const divarr = document.querySelectorAll('#Organization');
    setTargetDiv(divarr);
  }, []);

  targetdiv.forEach((el) => observer.observe(el));

  return (
    <div id={'Organization'} className={styled.Organization_Wrapper}>
      <Title maintitle={false}>ORGANIZATION</Title>
      <div className={styled.Organization}>
        <div className={styled.imageContainer}>
          <img alt="ceo" src={CEO} />
          <img
            alt="circle"
            src={circle}
            className={!isPlayCEOAni ? styled.Appearcircle : ''}
          />
          <img
            alt="arrow_line"
            src={arrow_line}
            className={!isPlayCEOAni ? styled.ApperarrowLine : ''}
          />
          <img
            alt="department"
            src={department}
            className={!isPlayCEOAni ? styled.Appeardepartment : ''}
          />
          <img
            alt="arrow"
            src={arrow}
            className={!isPlayCEOAni ? styled.Apperarrow : ''}
          />
          <img
            alt="subdepartment"
            src={subdepartment}
            className={!isPlayCEOAni ? styled.Appersubdepartment : ''}
          />
          {/* <div
            className={isPlayCEOAni ? styled.CEOAni : ''}
            // onMouseEnter={CEOAniHandler}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default Organization;
