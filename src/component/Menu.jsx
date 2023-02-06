import React, { useState } from 'react'

const Menu = () => {
    const [showNav, setShowNav] = useState(true)
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    return (
        <nav>
            <button onClick={toggleNav}>
                {showNav ? 'Hide Nav' : 'Show Nav'}
            </button>
            <ul style={{
                display: showNav ? 'block' : 'none'
            }}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Menu