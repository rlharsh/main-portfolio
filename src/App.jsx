import { BrowserRouter, Router, Routes, Link, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout';
import Home from './components/Home/Home';

import './assets/css/application.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
