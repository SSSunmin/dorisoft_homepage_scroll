import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from './BannerSlider.module.css';
import infoimg1 from '../../../imgs/home/aicando.png';
import infoimg2 from '../../../imgs/home/funthing.png';
import infoimg3 from '../../../imgs/home/shooting.png';
import infoimg4 from '../../../imgs/home/vr.png';

const img = [infoimg1, infoimg2, infoimg3, infoimg4];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 3000,
  draggable: false,
};

const BannerSlider = () => {
  return (
    <Slider {...settings} className={styled.BannerSlider}>
      {img.map((infoimg, idx) => (
        <img key={`slider_${idx}`} src={infoimg} className={styled.image} />
      ))}
    </Slider>
  );
};

export default BannerSlider;
