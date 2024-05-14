import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import BookLandLogo from '../../app/assets/BookLandLogo.png';
import UserLoginForm from '../../features/user/UserLoginForm';
import './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='App'>
            <Navbar dark color='primary' stick='top' expand='md'>
                <NavbarBrand className='ms-5' href='/'>
                    <img src={BookLandLogo} alt='nucamp logo' className='float-start' />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/books'>
                                <i className='fa fa-list fa-lg' /> Books
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <UserLoginForm />
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
