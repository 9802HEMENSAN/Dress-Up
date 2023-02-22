 
import './App.css';
import Navbar from './Components/Navbar';
 
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AllRoutes from './routes/AllRoutes';
 
function App() {
  return (
    <div className="App">
        <Navbar/>
          <AllRoutes/>
        <Footer/>
 
    </div>
  );
}

export default App;
