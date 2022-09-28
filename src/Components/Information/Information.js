import React from 'react';
import './Information.css'
import pic from '../../rrrrrrr.jpg'

const Information = () => {
    return (
        <div className='info'>
            {/* profile picture & name & address */}
           <div className='profile-owner'>
                <img className='profile-pic' src={pic} alt="" />
                <div>
                    <h5>Name: Rafin Hossain</h5>
                    <p>Dhamrai,Dhaka</p>
                </div>
           </div>
           {/* owner info */}
           <div className='owner-info'>
                <div>
                    <h4>75 kg</h4>
                    <p> Weight</p>
                </div>
                <div>
                        <h4>25 Yrs</h4>
                        <p>Age</p>
                </div>
                <div>
                    <h4>6.5 </h4>
                    <p>Height </p>
                </div>
            </div>
        {/* Add a break area  */}
        <div className='exercise'>
            <h2>Add A Break</h2>

        </div>
        {/* exercise details  */}
        <div className='exercise'>
            <h1>Exercise Details</h1>
            <div  className='exercise-area1'>
            <h3>Exercise Time:  <small>Minutes</small></h3>
            </div>
            <div className='exercise-area2'>
                <h3>Break Time:  <small>Minutes</small></h3>
            </div>
            
        </div>

        {/* activity complited button  */}
        <div className='btn-completed'>
        <button className='btn-activity'>
            <p>Activity Completed</p>
        </button>
        </div>

        </div>
    );
};

export default Information;