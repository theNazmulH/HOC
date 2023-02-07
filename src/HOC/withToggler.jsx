import React, { useState } from 'react';


const withToggler = (Component) => {
    return function (props) {
        const [isActive, setisActive] = useState(false);
        const toggle = () => {
            setisActive(!isActive);
        }
        return (
            <Component isActive={isActive} toggle={toggle} {...props} />
        )
    }
}

export default withToggler