import styled from './App.module.css';
import Home from './components/mainpage/home/Home';
import Header from './components/mainpage/home/Header';
import Footer from './components/mainpage/home/Footer';
import History from './components/mainpage/aboutus/History';
import React from 'react';
import Organization from './components/mainpage/aboutus/Organization';
import CustomerCenter from './components/mainpage/customercenter/CustomerCenter';
import BusinessInfo from './components/mainpage/home/BusinessInfo';
import {
  cyberexpo,
  ocean,
  SmartSecurity,
  aicando,
  funthing,
  BeamStory,
} from './components/util/imgIndex';
import BannerSlider from './components/mainpage/home/BannerSlider';
import CompanyInfo from './components/mainpage/home/CompanyInfo';
import Title from './components/ui/Title';
import { useRef } from 'react';
import OrganizationScroll from './components/mainpage/aboutus/OrganizationScroll';

const contents = [
  {
    title: '대표 사업',
    contents: [
      {
        subtitle: '교원 AiCANDO',
        imgpath: aicando,
        desc: [
          '업계 최초 메타버스 교실 및 실사형 인공지능Ai 튜터를 결합한 디지털 학습지',
          '학습자 개인별 학습 수준 및 성향 분석을 통해 1대1 맞춤형 교육 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: 'FUN Thing',
        imgpath: funthing,
        desc: [
          'MBC Playbe 어린이 디지털 공모전(경진대회) 플랫폼',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '여수엑스포 사이버박람회',
        imgpath: cyberexpo,
        desc: [
          'SK C&C와 컨소시엄 형태로 사업을 진행',
          '실사수준의 리얼타임 3D그래픽으로 제작된 가상의 박람회장',
          '시설 검색, 캐릭터 커스터마이징, 전시물 조작 등의 다양한 체험이 가능한 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: 'Smart security',
        imgpath: SmartSecurity,
        desc: [
          'CCTV를 실시간으로 3D공간에 구현하는 보안 소프트웨어',
          '시공테크 주관 『정보통신산업진흥원 (NIPA)』 과제로 본사에서 외주 개발',
          '3D 인터페이스를 활용한 터치스크린 조작',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '바다 속 탐험(VR)',
        imgpath: ocean,
        desc: [
          '국립어린이과학관의 VR 가상체험을 위한 소프트웨어',
          'Full 3D로 구현하여 실제 바다에 있는 듯한 경험을 할 수 있는 체험형 서비스',
          '사용기술 : UnityEngine',
        ],
      },
      {
        subtitle: '빔스토리',
        imgpath: BeamStory,
        desc: [
          '한복 디자인 학습용 프로그램',
          '수강생 뿐만 아니라 일반 유저들도 편하게 즐길 수 있는 서비스',
          '쉬운 조작 방법으로 남녀노소 어디서나 쉽게 이용',
          '사용기술 : UnityEngine',
        ],
      },
    ],
  },
];

function App() {
  return (
    <div id="scroll-top" className={styled.App}>
      <Header />
      <div className={styled.App__contents}>
        {/* <Home /> */}
        <BannerSlider />
        <Title id="scroll_0" maintitle={true}>
          OUR CONTENTS
        </Title>
        <div className={styled.CardWrapper}>
          {contents.map((data, idx) => (
            <BusinessInfo
              key={`BusinessInfo_${idx}`}
              title={data.title}
              contents={data.contents}
            />
          ))}
        </div>

        <Title
          id="scroll_1"
          maintitle={true}
          style={{ backgroundColor: 'var(--white-gray)' }}
        >
          ABOUT
        </Title>
        <CompanyInfo />
        <History />
        <Organization />
        {/* <OrganizationScroll /> */}

        <Title id="scroll_2" maintitle={true}>
          CONTACT US
        </Title>
        <CustomerCenter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
