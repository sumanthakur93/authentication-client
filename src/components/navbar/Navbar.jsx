import React from 'react';
import './navbar.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSingOut } from '../../reducer/authFeature/authSlices';


const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const isLoggedIn = false;
    const {user}  = useSelector(state=>state.auth);


   const clickHandler = () => {
      dispatch(userSingOut());
   }

  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={()=>navigate('/')}>Logo</div>
      <div className="navbar__buttons">
        {user ? (
          <>
            {/* <button className="navbar__button">Profile</button> */}
            <button className="navbar__button" onClick={clickHandler}>Logout</button>
          </>
        ) : (
          <button className="navbar__button" onClick={()=>navigate('/login')}>Login</button>
        )}
        <button className="navbar__button">Feedback</button>
      </div>
    </div>
  );
};

export default Navbar;
