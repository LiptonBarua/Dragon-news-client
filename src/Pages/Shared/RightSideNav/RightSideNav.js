import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
const handleLogin=()=>{
  providerLogin(googleProvider)
  .then(result=>{
    const user = result.user;
  })
  .catch(error=>console.error(error))
}
    return (
       <div>
            <ButtonGroup vertical>
        <Button onClick={handleLogin} variant="outline-info mb-2"><FaGoogle></FaGoogle> Login With google</Button>
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