import React from 'react'
import styles from './navigation.module.css'
import logo from './logo.png'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <div className={styles.navWrapper}>
        <li className={styles.navigationItem}>
          <a href="https://www.lovecircular.com" target='_blank'>
            <img src={logo} alt="" style={{height: 30, width: 148, margin: 0}}/>
          </a>
        </li>
      </div>
    </ul>
  </nav>
)
