import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h3>{post.frontmatter.title}</h3>
      <img src={post.node.frontmatter.featuredimage} style={{
          maxWidth="50vw"
        }}/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} style={{
          Width="100vw"
        }}/>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields{
        slug
      }
      frontmatter {
        title
        description
        featuredimage
        date
      }
    }
  }
`
