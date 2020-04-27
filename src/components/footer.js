import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <a href="https://twitter.com/lovecircular_" target="_blank">
          <p>twitter</p>
        </a>
      </li>
    </ul>
  </nav>
)
