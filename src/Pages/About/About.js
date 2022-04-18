import React from 'react';
import rana from '../../Images/tauhid-rana.jpg'

const About = () => {
    return (
        <div className='container'>
            <div style={{ width: "800px" }} className=' mt-5 d-flex justify-content-space-between align-items-center'>
                <div>
                    <img style={{ width: '500px' }} src={rana} alt="" />
                    
                </div>

                <div>
                    <h3 style={{color:'green'}}>Tauhidur Rahman Rana</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Travel the whole world</li>
                        <li class="list-group-item">Plant more trees</li>
                        <li class="list-group-item">Earning lots of money</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;