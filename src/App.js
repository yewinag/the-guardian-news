import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Search from './containers/Search';
import Detail from './containers/Detail';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import BookMark from './containers/BookMark';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/detail/:section/:year/:month/:day/:title"
          element={<Detail />}
        />
        <Route path="/search/:query" element={<Search />} />
        <Route
          path="/search/:tags/detail/:section/:year/:month/:day/:title"
          element={<Detail />}
        />
        <Route exact path="/bookmarks" element={<BookMark />} />
        <Route
          path="/bookmarks/detail/:section/:year/:month/:day/:title"
          element={<Detail />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
