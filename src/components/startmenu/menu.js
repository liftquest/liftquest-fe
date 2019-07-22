import React from 'react'

const Menu = ({data, click, change}) =>
    <ul className='menu'>
        {data.options.map(option =>
            <li
                key={option}
                className={option === data.active ? 'active' : null}
                onMouseEnter={change}
                onKeyUp={click}
                onClick={click}
                >{option}</li>
        )}
    </ul>

export default Menu