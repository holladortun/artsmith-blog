/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className='font-poppins '>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='createpost' element={<CreatePost />} />
        <Route path='discover' element={<Discover />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
