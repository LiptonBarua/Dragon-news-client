import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const[catagorys, setCatagorys] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-catagories')
        .then(res=>res.json())
        .then(data=>setCatagorys(data))
    })
    return (
        <div>
           <h5>All Catagory: {catagorys.length}</h5>
           {
            catagorys.map(catagory=><p key={catagory.id}>
                
           <Link to={`/catagorys/${catagory.id}`}>{catagory.name}</Link>
            </p>)
           }
        </div>
    );
};

export default LeftSideNav;