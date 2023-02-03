import { Link } from 'react-scroll';
import { menu } from './Header';

const TopbarBtn = (props) => {
  return (
    <div className={props.TopbarWrapper}>
      {menu.map((data, idx) => (
        <Link
          className={props.menunav}
          key={data.id}
          to={`scroll_${idx}`}
          smooth="true"
          duration={2000}
          offset={-50}
          onClick={props.onClick ? props.onClick : null}
        >
          <span className={props.menu} onClick={data.onMoveScroll}>
            {data.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default TopbarBtn;
