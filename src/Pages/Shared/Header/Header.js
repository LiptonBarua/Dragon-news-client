import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                 <Button className='ms-3' onClick={handleLogOut} variant="danger">Log Out</Button>
              </> :
              <>
              <Link className='bg-danger mx-2 text-white p-2' to='/login'>Login</Link>
              <Link className='bg-danger mx-2 text-white p-2' to='/register'>Register</Link>
              </>
            }
            
            </Nav.Link>
            <Link to='/public'>
             {user?.photoURL?
             <Image style={{height: '30px'}} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
            }
            </Link>
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