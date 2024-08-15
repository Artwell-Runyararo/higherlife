import React from 'react';
import { NavBar, Nav, Footer } from '../../components';

const Vacancies = () => {
  return (
    <>
      <NavBar />
      <Nav />
      <div className="container-fluid bgPicture">
        {/* Welcome Section */}
        <div className="row bg-slate-950/90 justify-center h-96 py-5">
          <div className="col-sm col-md col-lg text-center py-5">
            <p className="text-uppercase font-black text-white text-6xl">VACANCIES</p>
            {/* Double Lines */}
            <div className="row justify-center mt-4">
              <div className="col-6">
                <div className="flex justify-center">
                  <div className="col-sm col-md col-lg">&ensp;</div>
                  <div className="col-sm col-md col-lg">
                    <div style={{ height: 2 }} className='bg-white w-100'></div>
                  </div>
                  <div className="col-sm col-md col-lg">&ensp;</div>
                </div>
              </div>
            </div>
            {/* End of Double Lines */}
          </div>
        </div>
        {/* End of Welcome Section */}
      </div>
      <Footer />
    </>
  )
}

export default Vacancies