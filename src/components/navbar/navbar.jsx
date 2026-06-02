import { Link } from "react-router";
import { NavLink } from 'react-router-dom';
import style from '../navbar/navbar.module.scss';

export function Navbar() {

return (

  <nav className={style.navStyle}>
    <ul>
      <li className={style.linkStyle}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About me</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact me</NavLink>
      </li>
    </ul>
  </nav>
  )
}
