import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import GlobalStyle from './design/global_style'

const root = document.getElementById('liftquest')
ReactDOM.render(
    <>
        <GlobalStyle/>
        <App />
    </>,
    root
)