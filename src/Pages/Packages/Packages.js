import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    return (
        <div>
            <h2>Book our Package to Explore</h2>
            <div>
                {
                   
                }
            </div>
        </div>
    );
};

export default Packages;