import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const LogIn = () => {
    const [error , setError]=useState('');
    const [success , setSuccess]=useState('');
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location)
    const from=location.state?.from?.pathname || '/category/0'

    const handleLogIn = event =>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

        setError('');
        setSuccess('');

        signIn(email,password)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            event.target.reset()
            setSuccess('user successfully logged in')
            navigate(from, {replace:true})
        })
        .catch((error)=>{
            setError(error.message)

        })
        
    }



    return (

        <Container className='mx-auto w-25 border border-2 p-5 mt-5 rounded'>
            <h2>Please Log IN</h2>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Log In
                </Button>
                <Form.Text>
                    <h6>Don't Have An Account ? <Link className='text-danger text-decoration-none' to="/register">Register</Link></h6>

                </Form.Text>
                <Form.Text className="text-success">
                    {success}

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}

                </Form.Text>
            </Form>

        </Container>
    );
};

export default LogIn;