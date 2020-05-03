import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`}>
            <meta charSet="utf-8" />
            <link rel="icon" href="favicon.png" />
            <meta name="description" content="We train and mentor aspiring UX designers to get them job ready in 90 days."/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://twitter.com/lovecircular_"/>
            <meta property="og:title" content="Circular – Learn UX Design through mentorship"/>
            <meta property="og:description" content="We train and mentor aspiring UX designers to get them job ready in 90 days."/>
            <meta property="og:image" content="https://circular-static.s3.eu-west-2.amazonaws.com/twitter-card.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://twitter.com/lovecircular_"/>
            <meta property="twitter:title" content="Circular – Learn UX Design through mentorship"/>
            <meta property="twitter:description" content="We train and mentor aspiring UX designers to get them job ready in 90 days."/>
            <meta property="twitter:image" content="https://circular-static.s3.eu-west-2.amazonaws.com/twitter-card.png"/>
            <meta name="twitter:site" content="@lovecircular_"/>
          </Helmet>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1044, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
