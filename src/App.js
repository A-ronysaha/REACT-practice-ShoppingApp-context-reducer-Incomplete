import logo from './logo.svg';

import { Routes, Route } from "react-router-dom"
import Header from './Component/Layout/Header';
import Home from './Component/Layout/Home';
import Cart from './Component/Layout/Cart';
import Productprovider from './Hook/Context/Productcontext';


function App() {
  return (
    <div>
      <Productprovider>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
      </Productprovider>
    </div>
  );
}

export default App;
