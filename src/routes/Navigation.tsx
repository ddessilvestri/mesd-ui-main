import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../assets/react.svg';
import { LoginPage } from '../pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Users
              </NavLink>
            </li>
            
          </ul>
        </nav>

        <Routes>

          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<LoginPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
