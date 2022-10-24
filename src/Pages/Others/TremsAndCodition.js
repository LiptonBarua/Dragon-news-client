import React from 'react';
import { Link } from 'react-router-dom';

const TremsAndCodition = () => {
    return (
        <div>
             <h3>Here is our trems and condition</h3>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TremsAndCodition;