import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
  const {user}  = useSelector(state=>state.auth);



  return (
    <div className="home">
      {user ? (
        <div className="logged-in">
          <div className="thank-you">Thank You for visiting our site</div>
          <div className="user-info">
            <p>User Name: {user.username}</p>
            <p>User Email ID: {user.email}</p>
          </div>
        </div>
      ) : (
        <div className="logged-out">
          <h1>Welcome to Our Authentication App</h1>
          <button onClick={() => navigate('/register')}>Click here to register a new account</button>
        </div>
      )}
    </div>
  );
};

export default Home;
