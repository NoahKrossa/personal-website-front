import React, { Component } from 'react'
import styles from './postitem.m.scss'
import { Link } from 'react-router-dom'

export interface PostItemProps {
  title: string
  description: string
  link: string
  category: string
  imgSrc: string
}

export default class PostItemComponent extends Component<PostItemProps, {}> {
  render() {
    const { title, description, link, category, imgSrc } = this.props
    return (
      <>
        <article className={styles.post_item+" "+ "col_30__lg"}>
          <Link to={link}>
            <figure className={styles.image}>
              <img src={imgSrc} className={styles.content} alt="" />
            </figure>
            <div className={styles.body}>
              <header className={styles.header}>
              <h2>{title}</h2>
              <span className={styles.tag}>{category}</span>
              </header>
              <p>{description}</p>
            </div>
          </Link>
        </article>
      </>
    )
  }
}
