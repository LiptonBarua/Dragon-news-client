import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Public = () => {
   
    const{user} =useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoUrlRef = useRef(user.photoURL)

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(photoUrlRef.current.value)
    }

    const handleOnChange=(event)=>{
            setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user.email} type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleOnChange} defaultValue={name} type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" placeholder="photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Public;