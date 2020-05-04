import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className="wrapper">
    <div className={styles.hero} style={{ backgroud: '#EE4762' }}>
      <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
        style={{width:'100%'}}
      />
      <div className={styles.heroDetails}>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  </div>
)
