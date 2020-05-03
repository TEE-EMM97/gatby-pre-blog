import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
    <Link to={`/blog/${article.slug}`}>
  <div className={styles.preview}>
    {/* <Img alt="" fluid={article.heroImage.fluid} /> */}
      <h3 className={styles.previewTitle} style={{ color:'#ED4763'}}>
     {article.title}
    </h3>
    <p>{article.publishDate}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <hr/>
    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
      </Link>
)
