import React, { Component, ReactNode } from 'react'
import styles from './blog.m.scss'
import PostItemComponent from '../../components/PostItem/PostItem.component'
/** Component */
import ArchiveDisplayComponent from '../../components/ArchiveDisplay/ArchiveDisplay.component'
import data from '../../assets/latestPosts.json'
import postInfo from '../../assets/postsInfo.json'

export default class BlogView extends Component {
  render(): ReactNode {
    return (
      <div className="row">
        <section className={styles.section+" "+"col_70__lg col_100__xs"}>
          {/* Render latest posts */}
          <h2 className={styles.section_title}>Ultimos articulos</h2>
          <div className={styles.section_content + ' ' + 'row'}>
            {data.map((e, i) => {
              return (
                <PostItemComponent
                  key={i}
                  title={e.title}
                  description={e.description}
                  link={e.link}
                  imgSrc={e.imgSrc}
                  category={e.category}
                />
              )
            })}
          </div>
        </section>
        <aside className={styles.aside + " " + "col_30__lg col_70__md col_100__xs"}>
          <h2 className={styles.section_title}>archivos</h2>
          {postInfo.map((e, i) => {
            const { year, archives } = e
            return(
              <ArchiveDisplayComponent
                key={i}
                year={year}
                archives={archives}
              />
            )
          })}
        </aside>
      </div>
    )
  }
}
