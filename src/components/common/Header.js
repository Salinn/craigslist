import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/listings" activeClassName="active">Listings</Link>
            {" | "}
        </nav>
    );
};

Header.PropTypes = {};

export default Header