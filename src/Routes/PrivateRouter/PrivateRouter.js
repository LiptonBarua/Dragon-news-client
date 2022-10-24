import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loacation = useLocation();
    if(loading){
        return  <Spinner animation="border" variant="info" />
    }
   if(!user){
    return <Navigate to='/login' state={{from: loacation}} replace></Navigate>
   }
   return children;
};

export default PrivateRouter;