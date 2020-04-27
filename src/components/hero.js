import React from 'react';
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className="wrapper">
    <aside>
      <div className={styles.hero}>
        <Img
          className={styles.heroImage}
          alt={data.name}
        />
        <p style={{ position: "relative", top: '-15px', color: '#fff' }}>
          <span>Creative Technologist</span>
          <br />
          experimenting in underexplored intersections.
        </p>
      </div>
    </aside>
  </div>
)
