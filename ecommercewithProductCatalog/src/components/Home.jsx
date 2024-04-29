import React from 'react'
import Navbar from './Navbar';
import { useUserName } from './Context';
import Banner from './Banner';
import Welcome from './Welcome';
import CategoryMenu from './CategoryMenu';
import Products from './Products';
import Fotter from './Fotter';
import Offers from './Offers';
useUserName
const Home = () => {
    const { userName } = useUserName();
  return (
    <div>
    
      <Navbar userName={userName}/>
   
      <Banner/>
      <CategoryMenu/>
      <Products/>
      <Offers/>
      <Fotter/>
    </div>
  )
}

export default Home;
