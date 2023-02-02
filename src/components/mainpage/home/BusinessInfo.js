import { useState } from 'react';
import Modal from '../../ui/Modal';
import Slider from 'react-slick';
import Card from '../../ui/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from './BusinessInfo.module.css';
import {
  AiOutlineClose,
  AiFillCaretLeft,
  AiFillCaretRight,
} from 'react-icons/ai';

const BusinessInfo = ({ title, contents }) => {
  const [showMadal, setShowModal] = useState(false);
  const [curModal, setcurModal] = useState(0);
  const [curCard, setCurCard] = useState(0);

  const NextArrow = (props) => {
    const { className, style, currentSlide, onClick, slideCount } = props;
    const ClickHandler = () => {
      onClick();
      if (currentSlide < slideCount - 1) {
        setCurCard(currentSlide + 1);
      } else {
        setCurCard(0);
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(' ')}
        style={{ ...style, display: 'block' }}
        onClick={ClickHandler}
      >
        <AiFillCaretRight />
      </span>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, currentSlide, onClick } = props;
    const ClickHandler = () => {
      onClick();
      if (currentSlide > 0) {
        setCurCard(currentSlide - 1);
      } else {
        setCurCard(5);
      }
    };
    return (
      <span
        className={[props.cssclassName, className].join(' ')}
        style={{ ...style, display: 'block' }}
        onClick={ClickHandler}
      >
        <AiFillCaretLeft />
      </span>
    );
  };

  const Defaultsettings = {
    initialSlide: 0,
    draggable: false,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    Speed: 3000,
    variableWidth: true,
    nextArrow: <NextArrow cssclassName={styled.nextbtn} />,
    prevArrow: <PrevArrow cssclassName={styled.prevbtn} />,

    responsive: [
      {
        breakpoint: 1760, //화면 사이즈 1760px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 1300, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CloseModal = () => {
    setShowModal(false);
  };
  const OnClickCard = (e) => {
    // if (parseInt(e.target.id) !== curCard) {
    //   return;
    // }
    setShowModal(true);
    setcurModal(e.target.id);
  };
  return (
    <div className={styled.BusinessInfo}>
      {/* <div className={styled.title}>{title}</div> */}
      <Slider id={'Slider'} {...Defaultsettings} className={styled.CardList}>
        {contents.map((c, idx) => (
          <Card
            key={`Card_${idx}`}
            className={
              parseInt(curCard) === parseInt(idx) ? '' : styled.notcentercard
            }
          >
            <span className={styled.subTitle}>{c.subtitle}</span>
            <img
              alt="infoimg"
              id={idx}
              src={c.imgpath}
              className={styled.img}
              onClick={OnClickCard}
            />
          </Card>
        ))}
      </Slider>

      {showMadal && (
        <Modal OffPopup={CloseModal}>
          <AiOutlineClose
            className={styled.Modal__Close}
            onClick={CloseModal}
          />
          <img
            alt="modalimg"
            src={contents[curModal].imgpath}
            className={styled.Madal__image}
          />
          <div className={styled.Modal__title}>
            {contents[curModal].subtitle}
          </div>
          <div className={styled.Modal__Desc}>
            {contents[curModal].desc.map((data) => (
              <p>{data}</p>
            ))}
          </div>
        </Modal>
      )}
    </div>
    // </div>
  );
};
export default BusinessInfo;
