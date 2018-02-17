import * as React from 'react';
import { Link } from 'react-router-dom';
import * as style from './style.scss';

const Navbar: React.SFC<{}> = () => {
  return (
    <div className={style.navbarContainer}>
      <ul className={style.navbar}>
        <li className={style.item}>
          <Link to="/" className={style.link}>
            Home
          </Link>
        </li>
        <li className={style.item}>
          <Link to="/about" className={style.link}>
            About
          </Link>
        </li>
        <li className={style.item}>
          <Link to="/protected" className={style.link}>
            Protected
          </Link>
        </li>
        <li className={style.item}>
          <Link to="/login" className={style.link}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
