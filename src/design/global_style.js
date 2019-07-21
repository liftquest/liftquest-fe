import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    // font imports
    @font-face {
        font-family: premier;
        src: url('/fonts/premier.otf');
    }
    @font-face {
        font-family: misery;
        src: url('/fonts/misery.otf');
    }
    //animations
    @keyframes blink {
        50% {opacity: 0.0;}
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
    #liftquest {
        align-items: flex-start;
        background-color: #030B0F;
        color: #ccc;
        display: flex;
        height: 100%;
        justify-content: center;
    }
`

export default GlobalStyle