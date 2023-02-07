import React from 'react';
import withToggler from '../HOC/withToggler';

const Menu = (props) => {
    const { isActive, toggle } = props;
    return (
        <nav>
            <button onClick={toggle}>
                {isActive ? "Show " : "Hide "}
                Menu

            </button>
            <ul style={{
                display: isActive ? "none" : "block"
            }}>
                <li>Home</li>
                <li>Skill</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default withToggler(Menu);