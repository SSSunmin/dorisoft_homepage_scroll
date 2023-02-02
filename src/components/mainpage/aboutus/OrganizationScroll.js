import React, { useState } from 'react';
import styled from './OrganizationScroll.module.css';
import {
  CEO,
  department,
  subdepartment,
  circle,
  arrow,
  arrow_line,
} from '../../util/imgIndex';

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import Title from '../../ui/Title';

const OrganizationScroll = () => {
  const FadeUp = batch(FadeIn(), Sticky());
  return (
    <div style={{ backgroundColor: 'var(--white-gray)' }}>
      <Title maintitle={false}>ORGANIZATION</Title>
      <ScrollContainer style={{ display: 'block' }}>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
            <img alt="department" src={department} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
            <img alt="circle" src={circle} />
            <img alt="department" src={department} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
            <img alt="circle" src={circle} />
            <img alt="department" src={department} />
            <img alt="arrow_line" src={arrow_line} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
            <img alt="circle" src={circle} />
            <img alt="department" src={department} />
            <img alt="arrow_line" src={arrow_line} />
            <img alt="arrow" src={arrow} />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp} className={styled.Animator}>
            <img alt="ceo" src={CEO} />
            <img alt="circle" src={circle} />
            <img alt="department" src={department} />
            <img alt="arrow_line" src={arrow_line} />
            <img alt="arrow" src={arrow} />
            <img alt="subdepartment" src={subdepartment} />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default OrganizationScroll;
