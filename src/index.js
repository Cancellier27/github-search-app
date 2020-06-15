import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

function RenderApp(NextApp) {
    return (
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            , document.querySelector('[data-js="app"]')
        )
    )
}

RenderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        RenderApp(NextApp)
    })
}
