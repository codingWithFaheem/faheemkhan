import './App.css';
import Home from './Pages/Home';
import Navbar from './components/navbar/Navbar';

const  App = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f288b] from-64% via-[#4c1ce7] via-94% to-[#8978e0] 
    flex flex-col justify-center items-center
     
    ">
      
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
