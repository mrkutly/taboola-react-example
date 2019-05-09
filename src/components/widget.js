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
            publisher={'taboola-training'}
            pageType={'article'}
            placement={'Mid Article Widget'}
            mode={'thumbnails-2'}
            targetType={'mix'}
        />
    </WidgetContainer>
)
