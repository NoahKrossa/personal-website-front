import React, { Component, ReactNode } from 'react'
import styles from './post.m.scss'

export default class PostView extends Component {
  render(): ReactNode {
    return (
      <>
        <section className="row">
          <article className="col_70__lg col_100__md">
            <header className={styles.header}>
              <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                voluptatem?
              </h1>
              <span className={styles.timestamp}>24.agosto.2021</span>
              <span className={styles.category}>category</span>
            </header>
            <div className={styles.body}>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                veniam quos, accusantium labore reiciendis porro temporibus aut,
                magni cum quaerat tempora{' '}
                <b>iure natus culpa magnam dolorem </b>
                impedit vitae <q>facilis. Exercitationem sit maiores</q>{' '}
                temporibus soluta qui vel perspiciatis animi corrupti dicta.
              </p>
              <div className={styles.empty}></div>

              <blockquote>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, cumque.
              </blockquote>
              <div className={styles.empty}></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                itaque, assumenda accusantium cum culpa iure ut odio incidunt
                voluptatibus aliquid omnis atque repudiandae obcaecati eaque.
                Cumque veniam doloremque numquam voluptatibus!
                <a href="/">amet consectetur adipisicing elit.</a>
              </p>
              <div className={styles.empty}></div>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <ul>
                <li>Lorem ipsum dolor sit, Placeat, nobis!</li>
                <li>
                  Id laborum facilis harum laboriosam ipsum reiciendis cum saepe
                  dolorum.
                </li>
                <li>
                  Quaerat quas vel perferendis impedit at assumenda facilis. Ut,
                  sed.
                </li>
                <li>
                  Non porro molestias in illo ut inventore aspernatur tenetur
                  itaque?
                </li>
                <li>
                  Voluptates consequuntur officiis eum quas iusto eveniet quo
                  enim dignissimos.
                </li>
              </ul>
              <pre>
                <code className="language-css">{'p { color: red }'}</code>
              </pre>
            </div>
          </article>
        </section>
      </>
    )
  }
}
