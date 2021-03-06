import React, { useEffect } from 'react'
import LoadTaboolaEffect from '../hooks/LoadTaboolaEffect'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
    useEffect(LoadTaboolaEffect)
    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <h1>
                Click these links to see the Taboola React Plugin in action!
            </h1>
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
}

export default IndexPage
