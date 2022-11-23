import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';
import AddRestaurant from './components/AddRestaurant';
import Home from './components/home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Pizza from './components/pizza';
import Drinks from './components/drinks';

import Sides from './components/sides';
import Desserts from './components/desserts';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/restaurent' element={<Restaurant />} />
          <Route path='/add-restaurant' element={<AddRestaurant />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/sides' element={<Sides />} />
          <Route path='/desserts' element={<Desserts />} />




          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
