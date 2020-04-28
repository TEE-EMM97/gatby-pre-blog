import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    {/* <Img alt="" fluid={article.heroImage.fluid} /> */}
    <Link to={`/blog/${article.slug}`}>
      <h3 className={styles.previewTitle} style={{ color: '#ED4763'}}>
     {article.title}
    </h3>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
        style={{ paddingBottom: '10px' }}
    />
    </Link>
    <hr/>
    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)
