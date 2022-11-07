import logo from './logo.svg';
import './App.css';

import { Link, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup'
import NotFound from './components/notfound'


function App() {
  return (
    <div >

      <nav>
        <ul>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/login"> Login </Link></li>
          <li> <Link to="/signup"> Signup </Link></li>
        </ul>
      </nav>


      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<NotFound />}
        />
        <Route
          path="/login"
          element={<Login />}
          errorElement={<NotFound />}
        />
        <Route
          path="/signup"
          element={<Signup />}
          errorElement={<NotFound />}
        />

      </Routes>
    </div>
  );
}

export default App;
