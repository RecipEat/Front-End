import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './containers/Header';
import Footer from './containers/Footer';
import Content from './containers/Content';

function App() {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
