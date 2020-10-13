import React, { Component } from 'react'
import styles from './blog.m.scss'

/** Component */
import ArchiveDisplayComponent from '../../components/ArchiveDisplay/ArchiveDisplay.component'

export default class BlogView extends Component {
    render() {
        return(
            <div className="row">
                <section className=" col_70__lg col_100__xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus quos aliquam? Impedit deserunt fuga repudiandae nisi eaque quisquam id ex numquam dolores at aliquid, culpa hic, accusantium debitis eum?</section>
                <aside className="col_30__lg col_70__md col_100__xs">
                    {/* <ArchiveDisplayComponent/> */}
                </aside>
            </div>
        )
    }
}