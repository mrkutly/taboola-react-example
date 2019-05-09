import React from 'react'
import Taboola from '@mrkutly/taboola-react-plugin'
import styled from 'styled-components'

const FeedContainer = styled.div`
    max-width: 900px;
    margin: 20px auto;
`

export default props => (
    <FeedContainer>
        <Taboola
            currentUrl={props.currentUrl}
            publisher={'nbc-today'}
            pageType={'article'}
            placement={'Below Article - Taboola Feed'}
            mode={'thumbnails-feed-4x1'}
            targetType={'mix'}
        />
    </FeedContainer>
)
