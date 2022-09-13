import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Coins from './components/Coins';
import Homepage from './components/Homepage';


function App() {
  return (
    

    <BrowserRouter>
      
        <div className="app">
          <Header />
          <Routes>
              <Route path='/' element={<Homepage/>} exact />
              <Route path='/Coins/:id' element={<Coins/>} />

          </Routes>
        </div>

    </BrowserRouter>
    
  
  );
}

export default App;
