import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
