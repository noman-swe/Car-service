import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../../../images/genius-services-logo.png";
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary bg-custom">
                <Container className='header'>
                    <Navbar.Brand as={Link} to={'/'} className="logo">
                        <img className='img-logo' height={50} src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link-infos">
                            <Nav.Link as={Link} to={'/home'}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="home#services">
                                {/* as={Link} to={'/services'} */}
                                Services
                            </Nav.Link>
                            <Nav.Link href="home#experts">
                                {/* as={Link} to={'/experts'} */}
                                Experts
                            </Nav.Link>
                            <NavDropdown title="Dropdown" className='dropdown-menu-style' id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/action'}>
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/anotherAction'}>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/something'}>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={'/separated'}>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className='nav-link-infos'>
                            <Nav.Link as={Link} to={'/about'}>
                                About
                            </Nav.Link>
                            {
                                user ?
                                    <button className='log-out btn my-auto text-white' onClick={handleLogOut} >Logout</button>
                                    :
                                    <Nav.Link as={Link} to={'/login'} eventKey={2} >
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;