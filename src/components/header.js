import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
    background: #144c92;
    marginbottom: 1.45em;
`

const Container = styled.div`
    margin: 0 auto;
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
