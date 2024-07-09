import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import 'animate.css';
import { About_us, Contact_us, Specialties, Vacancies, Services } from './pages/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main dark:bg-slate-900 dark:text-white -z-10">
      <div className='gradient -z-10' />
    
    </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={`/`} index element={<App />} />
          <Route path={`/about`} element={<About_us />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/contact`} element={<Contact_us />} />
          <Route path={`/specialties `} element={<Specialties />} />
          <Route path={`/vacancies`} element={<Vacancies />} />
          <Route path={`/services`} element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
