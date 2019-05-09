import React from 'react'
import Taboola from '@mrkutly/taboola-react-plugin'
import styled from 'styled-components'

const FeedContainer = styled.div`
    max-width: 700px;
    margin: 20px auto;
`

export default props => (
    <FeedContainer>
        <Taboola
            currentUrl={props.currentUrl}
            publisher={'taboola-training'}
            pageType={'article'}
            placement={'Below Article Thumbnails'}
            mode={'thumbs-feed-01-a'}
            targetType={'mix'}
        />
    </FeedContainer>
)
