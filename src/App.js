import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Categories from './Pages/Categories';
import Homepage from './Pages/Homepage';
import MyStuff from './Pages/MyStuff';
import Store from './Pages/Store';
import Authenticate from './Pages/Authenticate';
import Moviepage from './Pages/Moviepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Footer />
              </>
            }
          />
          <Route path="/auth/*" element={<>
            <Authenticate />
            <Footer />
          </>} />
          <Route
            path="/categories/*"
            element={
              <>
                <Navbar />
                <Categories />
                <Footer />
              </>
            }
          />
          <Route
            path="/:movieName/*"
            element={
              <>
                <Navbar />
                <Moviepage />
                <Footer />
              </>
            }
          />
          <Route
            path="/store/*"
            element={
              <>
                <Navbar />
                <Store />
                <Footer />
              </>
            }
          />
          <Route
            path="/my-stuff/*"
            element={
              <>
                <Navbar />
                <MyStuff />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
