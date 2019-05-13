import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
    position: sticky;
    top: 20px;
    z-index: 2;
    background: white;
    padding: 1em;
    font-family: Roboto, Helvetica, sans-serif;
    text-decoration: none;
    color: black;
    border-radius: 2%;
    box-shadow: 2px 2px 5px black;
`

export default StyledLink
