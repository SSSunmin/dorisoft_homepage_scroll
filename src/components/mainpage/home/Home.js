import styled from './Home.module.css';
import BannerSlider from './BannerSlider';
import {
  cyberexpo,
  ocean,
  nae_sung,
  waterTime,
  SmartSecurity,
  shooting,
  RedpenAiMath,
  REDPENCoding,
  EnglishGo,
  aicando,
  funthing,
  archStepper,
  Vband,
  BeamStory,
  Questmaster,
} from '../../util/imgIndex';
import BusinessField from './BusinessField';
import CompanyInfo from './CompanyInfo';

/*const contents = [
  {
    title: 'Exhibition',
    contents: [
      { subtitle: '여수엑스포 사이버박람회', imgpath: cyberexpo },
      { subtitle: '바다 속 탐험(VR)', imgpath: ocean },
      { subtitle: '내성천의 눈물', imgpath: nae_sung },
      { subtitle: '디지털 타임캡슐', imgpath: waterTime },
    ],
  },
  {
    title: '3D CONVERGENCE',
    contents: [
      { subtitle: 'Smart security', imgpath: SmartSecurity },
      { subtitle: 'Shooting Simulation', imgpath: shooting },
    ],
  },
  {
    title: 'Education',
    contents: [
      { subtitle: '교원 AiCANDO', imgpath: aicando },
      { subtitle: 'FUN Thing', imgpath: funthing },
      { subtitle: 'English Go', imgpath: EnglishGo },
      { subtitle: 'REDPEN AI Math', imgpath: RedpenAiMath },
      { subtitle: 'REDPEN Coding', imgpath: REDPENCoding },
    ],
  },
  {
    title: '3D Mobile & Smart',
    contents: [
      { subtitle: 'MILLET Arch stepper', imgpath: archStepper },
      { subtitle: 'VBand (Amore)', imgpath: Vband },
      { subtitle: '빔스토리', imgpath: BeamStory },
      { subtitle: 'Quest master', imgpath: Questmaster },
    ],
  },
];*/

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <CompanyInfo />
      {/* <BusinessField /> */}
    </div>
  );
};

export default Home;
