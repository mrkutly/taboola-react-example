/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <head>
                    <script type="text/javascript">
                        {(function(e, f, u, i) {
                            if (!document.getElementById(i)) {
                                e.async = 1
                                e.src = u
                                e.id = i
                                f.parentNode.insertBefore(e, f)
                            }
                        })(
                            document.createElement('script'),
                            document.getElementsByTagName('script')[0],
                            '//cdn.taboola.com/libtrc/taboola-training/loader.js',
                            'tb_loader_script'
                        )}
                    </script>
                </head>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                    }}
                >
                    <main>{children}</main>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
