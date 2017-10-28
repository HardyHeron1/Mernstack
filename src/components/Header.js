/**
 * Created by sahaque on 10/28/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({headerMessage}) => {
    return (
        <div>
            <h2 className="Header text-center">{headerMessage}</h2>
            <div></div>
        </div>
    );
};

Header.prototype = {
    message: PropTypes.string,
};

export default Header;
