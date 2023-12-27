import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import UserDetail from './Components/userDetail';

const  App = () => {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              ColabKitchen Detail
              <ul>
              <li>
              <Link to="/user">UserDetail</Link>
              </li>
              <li>
              <Link to="/dish">DishDetail</Link>
              </li>
              <li>
              <Link to="/audit">AuditLogDetail</Link>
              </li> 
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/user" element={<UserDetail/>} >
          </Route>
          
          <Route path="/" element={<Home />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
    return <h2>Home</h2>;
  };

export default App;