import React from 'react'

const Menu = ({data, click, change}) =>
    <ul className='menu'>
        {/* {console.log(data)} */}
        {data.options.map(option =>
            <li
                key={option.text}
                className={option.route === data.active ? 'active' : null}
                name={option.route}
                onMouseEnter={change}
                onKeyUp={click}
                onClick={click}
                >{option.text}</li>
        )}
    </ul>

export default Menu