import React, { useState } from 'react';
import { NavBar, Nav, Slideshow, Services, About, Footer } from './components';

function App() {

  return (
    <>
      <NavBar />
      <Nav />
      <Slideshow />
      {/* gradient start */}
      <div className="absolute hidden sm:flex -z-10 w-[50%] h-[50%] blue__gradient-03" />
      {/* gradient end */}
      <Services />
      <About />
      {/* gradient start */}
      <div className="absolute hidden sm:flex -z-10 w-[50%] h-[50%] blue__gradient-02" />
      {/* gradient end */}
      <Footer />
    </>
  )
}

export default App
