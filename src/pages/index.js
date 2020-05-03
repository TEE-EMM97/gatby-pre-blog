import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Img from 'gatsby-image'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle}>
            <meta charSet="utf-8" />
            <link rel="icon" href="favicon.png" />
            <meta
              name="description"
              // content={data.site.siteMetadata.description}
            />
            {/* <meta property="og:type" content={site.siteMetadata.type} /> */}
            {/* <meta property="og:url" content={data.site.siteMetadata.url} /> */}
            {/* <meta property="og:title" content={data.site.siteMetadata.title} /> */}
            <meta
              property="og:description"
              // content={data.site.siteMetadata.description}
            />
            {/* <meta property="og:image" content={data.site.siteMetadata.image} /> */}

            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content="https://twitter.com/lovecircular_"
            />
            <meta
              property="twitter:title"
              content="Circular – Learn UX Design through mentorship"
            />
            <meta
              property="twitter:description"
              content="We train and mentor aspiring UX designers to get them job ready in 90 days."
            />
            <meta
              property="twitter:image"
              content="https://circular-static.s3.eu-west-2.amazonaws.com/twitter-card.png"
            />
            <meta name="twitter:site" content="@lovecircular_" />
          </Helmet>
          <Hero data={author.node} />
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        url
        description
        image
        icon
        type
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1044
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`