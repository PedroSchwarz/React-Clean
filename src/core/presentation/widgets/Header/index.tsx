import React from 'react'
import { Logo, NavBar } from './styles';
import MoovinLogo from '../../../../assets/images/logo.svg';

const Header: React.FC = () => {
    return (
        <NavBar>
            <Logo src={MoovinLogo} alt="Moovin"/>
        </NavBar>
    )
};

export default Header;