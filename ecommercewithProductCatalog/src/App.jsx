import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import SingleProduct from './components/SingleProduct';
import Manage from './components/Manage';
import CartItems from './components/CartItems';
import Bill from './components/Bill';

const App=() => {
  return (

    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route path='/manage/*' element={<Manage/>}/>
        <Route path='/cartItems' element={<CartItems/>}/>
         
        <Route path='/bill' element={<Bill/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
