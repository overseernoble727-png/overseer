import React from 'react';
import Banner from './Banner';
import About from './about';
import Products from './products';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Welcome to My Basic SPA</h1>
      <Banner />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
