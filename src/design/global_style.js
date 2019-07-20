import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    // font imports
    @font-face {
        font-family: premier;
        src: url('/fonts/premier.otf');
    }

    * {box-sizing: border-box}
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
    }
    body {
        height: 100%;
        width: 100%;
    }
    #root {
        height: 100%;
    }
`

export default GlobalStyle