import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
        const { user ,logOut } = useContext(AuthContext);
    const handleSignOut=()=>{
        logOut()
        .then(()=>{
            console.log('sign out successfully')
        })
        .catch((error)=>{
            console.log(error)

        })

    }

    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4'>
                <Container  >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link className='text-decoration-none text-black me-3' to="/">Home</Link>
                            <Link className='text-decoration-none text-black me-3' >About</Link>
                            <Link className='text-decoration-none text-black' >Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <Link style={{ fontSize: '2rem' }}><FaUserCircle></FaUserCircle></Link>
                            }
                            {
                                user ? <Button onClick={handleSignOut} className='mt-2' variant="secondary">Sign Out</Button> :
                                    <Link to="/login">
                                        <Button className='mt-2' variant="secondary">Log in</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;