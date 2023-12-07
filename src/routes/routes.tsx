import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages';

 const CustomRoutes = () => {
  return (
        <Routes>

          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/" element={<LoginPage/>} />
        </Routes>
  );
}

export {CustomRoutes }