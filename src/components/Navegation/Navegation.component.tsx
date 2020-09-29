import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './navbar.m.scss'
import avatar from '../../public/images/favicon-96x96.png'

export default class NavegationComponent extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.brand}>
            <figure className={styles.avatar}>
              <img src={avatar} alt="" />
            </figure>
            <div className={styles.brand_text}>
              <span className={styles.brand_text_strong}>NOAH KROSSA</span>
              <span className={styles.brand_text_regular}>
                Desarrollador web FullStack
              </span>
            </div>
          </div>
          <nav className={styles.menu}>
            <label htmlFor="btn-menu">
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>
            <input type="checkbox" id="btn-menu" />

            <NavLink to="/blog" activeClassName={styles.is_active} exact>
              BLOG
            </NavLink>
            <NavLink to="/courses" activeClassName={styles.is_active}>
              CURSOS
            </NavLink>
            <NavLink to="/projects" activeClassName={styles.is_active}>
              PROYECTOS
            </NavLink>
            <NavLink to="/about" activeClassName={styles.is_active}>
              SOBRE ME
            </NavLink>
          </nav>
        </div>
      </div>
    )
  }
}
