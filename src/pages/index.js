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
    const metaDescription = get(this, 'props.data.site.siteMetadata.description')
    const metaAuthor = get(this, 'props.data.site.siteMetadata.author')
    const metaUrl = get(this, 'props.data.site.siteMetadata.url')
    const metaImage = get(this, 'props.data.site.siteMetadata.image')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `og:title`,
                content: siteTitle,
              },
              {
                name: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:type`,
                content: `website`,
              },
              {
                name: `og:image`,
                content: metaImage,
              },
              {
                name: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
              {
                name: `icon`,
                content: metaImage,
              },
            ]}
            link={[
              {
                rel: 'icon',
                type: 'image/png',
                href: metaImage,
              },
            ]}
          />
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
               description
               author
               image
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
                   fluid(
                     maxWidth: 1050
                     maxHeight: 196
                     resizingBehavior: SCALE
                   ) {
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
                     background: "rgb:EE4762"
                   ) {
                     ...GatsbyContentfulFluid_tracedSVG
                   }
                 }
               }
             }
           }
         }
       `