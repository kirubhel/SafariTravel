import React from 'react'
import ContactUs from '../componenets/ContactUs'
import Countries from '../componenets/Countries'

import Hero from '../componenets/Hero'
import Hero2 from '../componenets/Hero2'
import Hero3 from '../componenets/Hero3'
import LastSec from '../componenets/LastSec'
import Requirment from '../componenets/Requirment'
import Service from '../componenets/Service'
import SpecialPrograms from '../componenets/SpecialPrograms'
import Testimonals from '../componenets/Testimonals'
import WorkwUS from '../componenets/WorkwUS'

function Home() {
  return (
    <div>
      
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Requirment/>
        <Countries/>
        <SpecialPrograms/>
        <Service/>
        <WorkwUS/>
        <Testimonals/>
        <ContactUs/>
        <LastSec/>
      
    </div>
  )
}

export default Home