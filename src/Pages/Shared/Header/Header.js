import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'
import { FaUser } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
const Header = () => {
  const {user, logOut}= useContext(AuthContext);

   const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
   }
    return (
  <div>
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#deets">
            {
              user?.uid?
              <>
                 {user?.displayName}
                 <Button onClick={handleLogOut} variant="danger">Log Out</Button>
              </> :
              <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              </>
            }
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             {user?.photoURL?
             <Image style={{height: '30px'}} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
            }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;