import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault()
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;

     signIn(email, password)
     .then(result=>{
       const user= result.user;
       form.reset()
       console.log(user);
      //  alert('My login Successfully');
      navigate('/')
     })
     .then(error=>console.error(error))
  }
    return (
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
};

export default Login;