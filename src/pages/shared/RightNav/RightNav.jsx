import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebook , FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import'./RightNav.css'


const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2 p-3 w-100' variant="primary"><FaGoogle /> Login with Google</Button>
            <Button className='my-2 p-3 w-100' variant="secondary"> <FaGithub />  Login with Github</Button>

            <div>
                <h3 className='mt-4 mb-2'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='amazing text-center mt-5'>
                <h1 className='text-white pt-5'>Create an Amazing Newspaper</h1>
                <p className='text-white ps-5 pe-5 py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='learn mb-5'>Learn More</button>

            </div>
        </div>

    );
};

export default RightNav;