import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './Home.m.scss'
import {
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import data from '../../assets/latestPosts.json'
/** Components */
import PostItemComponent from '../../components/PostItem/PostItem.component'

interface HomeViewStats {
  data: any
}
export default class HomeView extends Component<{}, HomeViewStats> {
  render() {
    return (
      <>
        <section>
          <div className="row">
            <div
              className={
                styles.presentation_image + ' ' + 'col_100__xs col_50__lg '
              }
            >
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
                <p className={styles.presentation_title}>Hola y bienvenidos.</p>
                <h1 className={styles.presentation_body}>
                  Me llamo Noah soy desarrollador web Full Stak
                </h1>
                <p className={styles.presentation_body}>
                  he creado este sitio para tener un registro de los
                  conocimientos que he ido adqueriendo estos años y para futuros
                  aprendizajes, además de compartir estas eperiencias con
                  ustedes.
                </p>
                <p className={styles.presentation_subtitle}>
                  Tambien me puedes encontrar en
                </p>
                <nav className={styles.presentation_socialmedia}>
                  <a
                    href="https://www.youtube.com/channel/UCWTBu46QuLp_uwhXKgo0u7w?view_as=subscriber"
                    rel="external"
                    target="_blank"
                    className={styles.social_icon}
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faYoutube as IconProp}
                    />
                    <span className={styles.text}>Canal de youtube</span>
                  </a>
                  <a
                    href="https://twitter.com/noahkrossa"
                    rel="external"
                    target="_blank"
                    className={styles.social_icon}
                  >
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={faTwitter as IconProp}
                    />
                    <span className={styles.text}>@noahkrossa</span>
                  </a>
                  <a
                    href="https://instagram.com/noahkrossa"
                    rel="external"
                    target="_blank"
                    className={styles.social_icon}
                  >
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
        </section>
        <div className="container-separator"></div>
        <div className="container-separator"></div>
        <section>
          <h2 className={styles.title}>Ultimos articulos</h2>
          <div className="container-separator"></div>
          <div className="row">
            {data.map((elem, i) => {
              return (
                <PostItemComponent
                  key={i}
                  title={elem.title}
                  description={elem.description}
                  link={elem.link}
                  category={elem.category}
                  imgSrc={elem.imgSrc}
                />
              )
            })}
          </div>
        </section>
      </>
    )
  }
}
