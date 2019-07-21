import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            height: 51.2vmin;
            width: 51.2vmin;
            fill: #ccc;
        }
        h1 {
            font-family: misery;
            font-size: 15vmin;
            text-align: center;
            color: red;
            letter-spacing: 2vmin;
        }
    }
    .content {
        pre {
            font-family: premier;
            font-size: 3vmin;
        }
    }
    
`