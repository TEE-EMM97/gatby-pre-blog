import React from 'react'
import styles from './navigation.module.css'
import logo from './logo.png'

export default () => (
  <nav role="navigation" className={styles.navWrapper}>
    <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <a href="https://www.lovecircular.com" target='_blank'>
            <img src={logo} alt="" style={{height: 30, width: 148, margin: 0}}/>
          </a>
        </li>
    </ul>
  </nav>
)
