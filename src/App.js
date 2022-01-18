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
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/detail/:section/:year/:month/:day/:title"
          element={<Detail />}
        />
        <Route exact path="/search/:query" element={<Search />} />
        <Route
          exact
          path="/search/:tags/detail/:section/:year/:month/:day/:title"
          element={<Detail />}
        />
        <Route exact path="/bookmarks" element={<BookMark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
