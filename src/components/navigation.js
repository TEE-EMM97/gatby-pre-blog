import React from 'react'
import stylesTwo from './navigation.module.css'
import logo from './logo.png'
import base from './base.css'
import styles from './article-preview.module.css'

export default () => (
  <div className='wrapper' style={{ padding: 0 }}>
    <nav role="navigation" className={stylesTwo.navWrapper}>
      <ul className={stylesTwo.navigation}>
        <li className={styles.previewTitle}>
          <a href="https://www.lovecircular.com" target='_blank'>
            <img src="https://circular-static.s3.eu-west-2.amazonaws.com/circular_logo_black.png" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)