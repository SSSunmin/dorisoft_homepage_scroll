import TopbarBtn from './TopbarBtn';
import styled from './DiviceTopBar.module.css';

const DiviceTopBar = (props) => {
  return (
    <TopbarBtn
      TopbarWrapper={[
        styled.diviceTopbar,
        props.toggle ? styled.AppearTopbar : '',
      ].join(' ')}
      onClick={props.onClick}
      menunav={styled.menunav}
      menu={styled.menu}
    />
  );
};
export default DiviceTopBar;
