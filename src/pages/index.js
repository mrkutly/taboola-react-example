import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Check out these amazing articles</h1>
        <ul>
            <li>
                <Link to="/page-1/">First Amazing Article</Link>
            </li>
            <li>
                <Link to="/page-2/">Second Amazing Article</Link>
            </li>
        </ul>
    </Layout>
)

export default IndexPage
