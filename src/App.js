import React, { useEffect } from 'react';
import Hero from './components/sections/hero.js';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import SecondSection from './components/sections/internships.js';
import {Routes, Route, useLocation} from "react-router-dom";
import First from './components/sections/first.js';
import Second from './components/sections/second.js';
import Third from './components/sections/third.js';
import Fourth from './components/sections/fourth.js';
import AboutMe from './components/sections/aboutMe.js';

function Main(){
  return(
    <>
      <Hero />
      <SecondSection />
    </>
  )
}

function App(){
  const position = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [position]);

  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/first' element={<First />}></Route>
        <Route path='/second' element={<Second />}></Route>
        <Route path='/third' element={<Third />}></Route>
        <Route path='/fourth' element={<Fourth />}></Route>
        <Route path='/aboutMe' element={<AboutMe />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;