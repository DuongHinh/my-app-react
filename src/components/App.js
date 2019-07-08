import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import RedirectUrl from './../router/RedirectUrl';

function App() {
  return (
    <div>
            <Nav/>
            <RedirectUrl/>
            <Footer/>
       </div>
  );
}

export default App;
