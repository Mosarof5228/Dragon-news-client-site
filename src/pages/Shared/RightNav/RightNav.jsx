import React from 'react';
import './RightNav.css'
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithubSquare, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import QZone from '../QZone/QZone';
const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithubSquare />  Login With Github</Button>
            </div>

            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagramSquare /> Instagram</ListGroup.Item>
                </ListGroup>

            </div>

            <QZone></QZone>

            <div className='learn-more d-flex align-items-center'>
                <div className='text-white px-5 py-5 text-center'>
                    <h4>Create an Amazing Newspaper</h4>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='bg-danger px-3 py-2 text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;