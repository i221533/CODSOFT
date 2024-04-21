import React from 'react'
import Signin from './Signin'
import Navbar from './Navbar'

import Banner from './Banner'
import Posts from './Posts'
import Fotter from './Fotter'
import Testominals from './Testominals'
import TeamMembers from './TeamMembers'

const Home = () => {
  return (
    <div>
   <Navbar/>
    <Banner/>
    <Posts/>
    <Testominals/>

    <TeamMembers/>
    <Fotter/>
    
    </div>
  )
}

export default Home
