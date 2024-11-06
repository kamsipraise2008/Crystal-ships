import React, {useEffect} from 'react'
import Nav from './component/Header'
import Home from './component/Home'
import Service from './component/Service'
import Tracking from './component/Tracking'
import Contact from './component/Contact'
import FOOTER from './component/kamsi/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App(){
  useEffect(() => {
    AOS.init({
      duration:2000,
      once:true
    });
  }, [])
  return (
    <>
    <Nav />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/service' element={<Service/>}/>
        <Route exact path='/tracking' element={<Tracking/>}/>
        <Route exact path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>
    <FOOTER />0
    </>
  )
}

export default App