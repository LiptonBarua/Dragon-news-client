import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const{createUser}=useContext(AuthContext);
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password= form.password.value;

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            form.reset();
            console.log(user)
            
        })
        .catch(error=>console.error(error));
    }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Your Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Photo URL" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Register;