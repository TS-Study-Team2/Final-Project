import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
