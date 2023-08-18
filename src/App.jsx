import {BrowserRouter, Routes ,Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import NotFound from './components/NotFound.jsx';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
