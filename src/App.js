import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './containers/Home';
import Search from './containers/Search';
import Detail from './containers/Detail';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

function App() {
  return (
    <Router>
      <Header />      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
