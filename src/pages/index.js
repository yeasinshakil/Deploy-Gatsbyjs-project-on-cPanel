import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>GatsbyJs Cpanel Deployment Demo</h1>
      
      <div style={{display: 'flex', gap: '20px'}}>
        <div style={{border: '1px solid red', borderRadius:'10px', padding: '10px'}}>
          <h3>Useful Blogs from BitbyteSoft</h3>
          <ul>
            
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/getting-started-with-gatsbyjs-integration/" target='_blank' style={{textDecoration: 'none',}}>Getting Started With GatsbyJS Integration: A Comprehensive Guide</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/how-to-use-instagram-for-business-amazing-guide/" target='_blank' style={{textDecoration: 'none',}}>How To Use Instagram For Business In 2023: A Complete Guide</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/ultimate-guide-to-b2b-copywriting-strategies/" target='_blank' style={{textDecoration: 'none',}}>The Ultimate Guide To B2B Copywriting: Strategies And Best Practices
</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/what-is-artificial-intelligence-ai/" target='_blank' style={{textDecoration: 'none',}}>What Is Artificial Intelligence (AI)?</a></li>
          </ul>
        </div>
        <div>
          <h3>Useful Blogs from BitbyHost</h3>
          <ul>
            
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/getting-started-with-gatsbyjs-integration/" target='_blank' style={{textDecoration: 'none',}}>Getting Started With GatsbyJS Integration: A Comprehensive Guide</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/how-to-use-instagram-for-business-amazing-guide/" target='_blank' style={{textDecoration: 'none',}}>How To Use Instagram For Business In 2023: A Complete Guide</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/ultimate-guide-to-b2b-copywriting-strategies/" target='_blank' style={{textDecoration: 'none',}}>The Ultimate Guide To B2B Copywriting: Strategies And Best Practices
</a></li>
            <li style={{marginTop: '10px'}}><a href="https://bitbytesoft.com/what-is-artificial-intelligence-ai/" target='_blank' style={{textDecoration: 'none',}}>What Is Artificial Intelligence (AI)?</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage