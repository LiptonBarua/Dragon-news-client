import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
       <div>
            <ButtonGroup vertical>
        <Button variant="outline-info mb-2"><FaGoogle></FaGoogle> Login With google</Button>
        <Button variant="outline-success mb-4"><FaGithub></FaGithub> Login With github</Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ListGroup>
      <ListGroup.Item className='mt-2'><FaFacebook></FaFacebook> facebook</ListGroup.Item>
      <ListGroup.Item className='mt-2'><FaWhatsapp></FaWhatsapp> whatsApp</ListGroup.Item>
      <ListGroup.Item className='mt-2'><FaTwitch></FaTwitch> twitch</ListGroup.Item>
      <ListGroup.Item className='mt-2'><FaTwitter></FaTwitter> twitter</ListGroup.Item>
    </ListGroup>
      </div>
      <div className='mt-4'>
        <BrandCarousel></BrandCarousel>
      </div>
       </div>
    );
};

export default RightSideNav;