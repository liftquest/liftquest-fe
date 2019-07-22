import Styled from 'styled-components'

export default Styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & > ul {min-height: 15vmin}
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
    .menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        li {
            color: #ccc;
            cursor: pointer;
            font-family: premier;
            font-size: 3vmin;
            text-transform: uppercase;
            &.active {animation: blink 666ms infinite}
        }
    }
`