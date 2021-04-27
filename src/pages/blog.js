import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <img src={post.node.frontmatter.featuredimage} className="blog-image"/>
        <br />
        <br />
        <Link to={post.node.fields.slug}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields{
            slug
          }
          frontmatter {
            title
            date
            description
            featuredimage
          }
        }
      }
    }
  }
`

export default BlogPage
