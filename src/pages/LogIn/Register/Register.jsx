import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser, profileUpdate}=useContext(AuthContext);
    const [error , setError]=useState('');
    const [success,setSuccess]=useState('')
    const [accepted , setAccepted]=useState(false)


    const handleRegister=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const photo=event.target.photo.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name , photo , email , password);

        setError('')

        createUser(email,password)
        .then((result)=>{
            const createdUser=result.user;
            console.log(createdUser);
            profileUpdate(name,photo)
            .then(()=>{
                console.log('profile updated')
            })
            .catch((error)=>{
                setError(error.message)
            })
           
            
        })
        .catch((error)=>{
            setError(error.message)
        })}
        const handleAccepted = event=>{
            setAccepted(event.target.checked)
        }





    return (
        <Container className='mx-auto w-25 border border-2 p-5 mt-5 rounded'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted}
                      type="checkbox" name='accept' label="Accept Term & Conditions" />
                </Form.Group>
                <Button disabled={!accepted} variant="primary" type="submit">
                   Register
                </Button>
                <Form.Text>
                    <h6>Already Have An Account?<Link className='text-danger text-decoration-none' to="/login">Log In</Link></h6>

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;