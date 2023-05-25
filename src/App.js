import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Banner/> */}
      <Homepage/>
    </div>
  );
}

export default App;
