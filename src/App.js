import React from 'react';
import Home from './Home';
import {Route, Routes} from 'react-router'
import About from './Pages/About';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
const App = () => {
  return (
      <>
        <Routes>
        <Route exact path = '/' element = {<Home/>}></Route>
        <Route exact path = '/services' element = {<Services/>}></Route>
        <Route exact path = '/products' element = {<Products/>}></Route>
        <Route exact path = '/about' element = {<About/>}></Route>
        <Route exact path = '/contact' element = {<Contact/>}></Route>
        <Route exact path = '*' element = {<Home/>}></Route>
                
        </Routes>

        
        
         
      </>
  )
};

export default App;
