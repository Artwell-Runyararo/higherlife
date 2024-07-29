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
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1A4565] to-[#2247c4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr rotate-[0deg] from-[#1A4565] to-[#2247c4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
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
