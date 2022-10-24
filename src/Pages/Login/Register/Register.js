import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError]= useState('');
  const [accepted, setAccepted] = useState(false);
    const{createUser, updateUserProfile, verifyEmail}=useContext(AuthContext);
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
            setError('');
            handleUpdateProfile(name, photoURL)
            handleVerificationEmail();
            toast.success('Please your email verify');
            console.log(user)
            
        })
        .catch(error=>{
          setError(error.message);
         })
    };

    const handleUpdateProfile=(name, photoURL)=>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error=>console.error(error))
    }

    const handleAccepted= event=>{
      setAccepted(event.target.checked);
    };

    const handleVerificationEmail=()=>{
      verifyEmail()
      .then(()=>{})
      .catch(error=>console.error(error))
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
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Trems and Condition</Link> </>}  />
      </Form.Group>
      <Form.Text className="text-muted">
           {error}
        </Form.Text><br/>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
    </Form>
    );
};

export default Register;