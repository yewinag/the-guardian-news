import {
  BrowserRouter as Router,  
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './containers/Home';
import Search from './containers/Search';
import Detail from './containers/Detail';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/detail">Detail</Link>

      <Routes>
        <Route exact path="/" element={<Home />} />                  
        <Route path="/search" element={<Search />} />                  
        <Route path="/detail" element={<Detail />} />                
      </Routes>      
    </Router>
  );
}

export default App;
