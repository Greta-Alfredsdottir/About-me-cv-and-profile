import style from '../navbar/navbar.module.scss'

export const Navbar = () => {

return (

  <nav className={style.navStyle}>
    <ul>
      <li className={style.linkStyle}>
        <a href="#">Link 1</a>
      </li>
      <li>
        <a href="#">Link 2</a>
      </li>
      <li>
        <a href="#">Link 3</a>
      </li>
    </ul>
  </nav>
  )
}
