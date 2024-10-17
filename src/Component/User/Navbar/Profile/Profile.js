import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DataContext } from '../../Context/DataContext';
import './Profile.css';
import { MyCartContext } from '../../Context/CartContext';

function Profile() {
    const { current,setCurrent  } = useContext(DataContext);
    const {clearCart}=useContext(MyCartContext)
    const navigate=useNavigate();
    
    const handleLogout = () => {
        setCurrent(null);
        clearCart()
        localStorage.removeItem('current');
        navigate('/login');
      };
    
   

    return (
        <div className="profile-container">
            <div className="profile-card">
                
                <h2 className="profile-title">Welcome ,{current.name}</h2>
               
               
                <button className="btn btn-danger profile-button" onClick={handleLogout}>Log out</button>
                <Link to="/" className="btn btn-primary profile-button">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Profile;
