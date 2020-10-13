import React, { Component, ReactNode } from 'react'
import styles from './archiveDisplay.m.scss'
import { Link } from 'react-router-dom'

/**
 * TODO: Put interfaces and types in type archive
 */

interface ArchiveDisplayComponentProps {
  year: string
  archives: {
    month: string
    posts: {
      title: string
      id: string
    }[]
  }[]
}
interface ArchiveDisplayComponentState {
  data: string[]
}

export default class ArchiveDisplayComponent extends Component<
  ArchiveDisplayComponentProps,
  ArchiveDisplayComponentState
> {
  render(): ReactNode {
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
                    return(
                      <li key={i}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </li>
                    )
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
