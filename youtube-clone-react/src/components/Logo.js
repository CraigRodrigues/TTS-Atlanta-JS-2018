import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/tubeLogo.jpg'

function Logo(props) {
    return (
        <div id="logo">
            <Link to='/'>
                <img src={logoImg} width="200" height="200" />
            </Link>
        </div>
    );
}

export default Logo;