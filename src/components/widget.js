import React from 'react'
import Taboola from '@mrkutly/taboola-react-plugin'
import styled from 'styled-components'

const WidgetContainer = styled.div`
    max-width: 900px;
    margin: 20px auto;
`

export default props => (
    <WidgetContainer>
        <Taboola
            currentUrl={props.currentUrl}
            publisher={'nbc-today'}
            pageType={'article'}
            placement={'Mid Article Widget'}
            mode={'thumbnails-feed-4x1'}
            targetType={'mix'}
        />
    </WidgetContainer>
)
