import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
    background: #144c92;
`

const Container = styled.div`
    margin: 0 auto 1.45em;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`

const LinkStyles = styled(Link)`
    color: white;
    text-decoration: none;
`

const Header = ({ siteTitle }) => (
    <HeaderStyles>
        <Container>
            <h1 style={{ margin: 0 }}>
                <LinkStyles to="/">{siteTitle}</LinkStyles>
            </h1>
            <p style={{ color: 'white' }}>
                NOTE: these widgets and feeds are connected to the Taboola
                Training account and will only work from the Taboola VPN
            </p>
        </Container>
    </HeaderStyles>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
