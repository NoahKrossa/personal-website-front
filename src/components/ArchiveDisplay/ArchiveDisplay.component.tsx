import React, { Component } from 'react'
import styles from './archiveDisplay.m.scss'
import { Link } from 'react-router-dom'

/**
 * TODO: Put interfaces and types in type archive
 */
type Month =
  | 'Enero'
  | 'Febrero'
  | 'Marzo'
  | 'Abril'
  | 'Juno'
  | 'Julio'
  | 'Agosto'
  | 'Septiembre'
  | 'Octubre'
  | 'Noviembre'
  | 'Diciembre'

interface PostRef {
  title: string
  id: string
}
interface Archives {
  month: Month
  posts: PostRef[]
}

interface ArchiveDisplayComponentProps {
  year: string
  archives: Archives[]
}

export default class ArchiveDisplayComponent extends Component<
  ArchiveDisplayComponentProps,
  {}
> {
  render() {
    const { year, archives } = this.props
    return (
      <div className={styles.archive_content}>
        <div className={styles.archive_year}>
          <span>{year}</span>
          {archives.map((e, i) => {
            return (
              <div key={i} className={styles.archive_list}>
                <span>{e.month}</span>
                <ul className={styles.archive_month}>
                  {e.posts.map((post, i) => {
                    ;<li key={i}>
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
