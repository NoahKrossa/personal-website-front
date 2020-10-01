import React, { Component } from 'react'
import avatar from '../../public/images/ms-icon-310x310.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './Home.m.scss'
import {
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

export default class HomeView extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="row">
              <div className={styles.presentation_image + " "+ "col_100__xs col_50__lg "} >
                <figure className={styles.image}>
                  <img
                    src="https://pradosoft.com/wp-content/uploads/2018/08/519161592-612x612-570x350.jpg"
                    alt=""
                    className={styles.content}
                  />
                </figure>
              </div>
              <div className="col_100__xs col_50__lg">
                <article className={styles.presentation}>
                  <p className={styles.presentation_title}>
                    Hola y bienvenidos.
                  </p>
                  <h1 className={styles.presentation_body}>
                    Me llamo Noah soy desarrollador web Full Stak
                  </h1>
                  <p className={styles.presentation_body}>
                    he creado este sitio para tener un registro de los
                    conocimientos que he ido adqueriendo estos años y para
                    futuros aprendizajes, además de compartir estas eperiencias
                    con ustedes.
                  </p>
                  <p className={styles.presentation_subtitle}>
                    Tambien me puedes encontrar en
                  </p>
                  <nav className={styles.presentation_socialmedia}>
                    <a className={styles.social_icon} href="/">
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faYoutube as IconProp}
                      />
                      <span className={styles.text}>Canal de youtube</span>
                    </a>
                    <a href="/" className={styles.social_icon}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faTwitter as IconProp}
                      />
                      <span className={styles.text}>@noahkrossa</span>
                    </a>
                    <a href="/" className={styles.social_icon}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faInstagram as IconProp}
                      />
                      <span className={styles.text}>@noahkrossa</span>
                    </a>
                  </nav>
                </article>
              </div>
            </div>
          </div>
        </section>
        <div className="container-separator"></div>
        <div className="container">ss</div>
      </>
    )
  }
}
