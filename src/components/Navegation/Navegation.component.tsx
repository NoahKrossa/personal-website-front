import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTshirt } from '@fortawesome/free-solid-svg-icons'
import styles from './navbar.m.scss'
import avatar from '../../public/images/favicon-96x96.png'

export default class NavegationComponent extends Component {
  state = {
    menuCollapsed: true
  }

  hideMenu() {
    this.setState({
      menuCollapsed: true
    })
  }
  toggleMenu() {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed
    })
  }

  render() {
    const isHide = this.state.menuCollapsed ? styles.is_hide : ''
    console.log('rendering')
    return (
      <div className={styles.navbar + ' ' + 'container'}>
        <NavLink
          onClick={() => {
            this.hideMenu()
          }}
          to="/"
          exact
        >
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
        </NavLink>
        <label
          onClick={() => {
            this.toggleMenu()
          }}
          className={styles.menu_button}
          htmlFor={styles.menu_button}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <input type="checkbox" id={styles.menu_button} />
        <nav className={styles.menu + ' ' + isHide}>
          <NavLink
            onClick={() => {
              this.hideMenu()
            }}
            className={styles.menu_item}
            to="/blog"
            activeClassName={styles.is_active}
            exact
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => {
              this.hideMenu()
            }}
            className={styles.menu_item}
            to="/courses"
            activeClassName={styles.is_active}
          >
            Cursos
          </NavLink>
          <NavLink
            onClick={() => {
              this.hideMenu()
            }}
            className={styles.menu_item}
            to="/projects"
            activeClassName={styles.is_active}
          >
            Proyectos
          </NavLink>
          <NavLink
            onClick={() => {
              this.hideMenu()
            }}
            className={styles.menu_item}
            to="/about"
            activeClassName={styles.is_active}
          >
            Sobre mi
          </NavLink>
        </nav>
      </div>
    )
  }
}
