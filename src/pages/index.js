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
                <Link to="/amazing-dogs/">Read about an Amazing Dog</Link>
            </li>
            <li>
                <Link to="/amazing-cats/">Read about an Amazing Cat</Link>
            </li>
        </ul>
    </Layout>
)

export default IndexPage
