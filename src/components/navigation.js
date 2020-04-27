import React from 'react'
import styles from './navigation.module.css'
import logo from './logo.png';

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <div className="nav-wrapper">
        <li className={styles.navigationItem}>
          <a href="https://www.lovecircular.com" target='_blank'>
            <img src={logo} alt="" style={{ height: "30px", width: '148px', marginTop:15, marginBottom: '10px', marginLeft:'-4px' }} />
          </a>
        </li>
      </div>
    </ul>
  </nav>
)
