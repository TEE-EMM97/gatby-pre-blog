import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'
import stylesTwo from './navigation.module.css'

export default () => (
  <div className="wrapper" style={{ padding: 0 }}>
    <nav role="navigation" className={stylesTwo.navWrapper}>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <a href="https://twitter.com/lovecircular_" target="_blank">
            <h4>Twitter</h4>
          </a>
        </li>
        <li className={styles.navigationItem}>
          <a href="https://www.instagram.com/lovecircular/" target="_blank">
            <h4>Instagram</h4>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)