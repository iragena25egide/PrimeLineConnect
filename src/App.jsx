import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './header';
import Introduction from './introduction';
import Capabilities from './capabilities';
import About from './about';
import Proof from './future-proof';
import Smart from './smart';
import Network from './network';
import Map from './map';
import Explore from './explore';
import Footer from './footer';
import AboutUs from './aboutUs';
import Customer from './customer';
import Emergency from './emergency';
import Innovation from './innovation';
import Careers from './careers';
import ContactUs from './contactUs';
import HeroSection from './try';
import NetworkCommunications from './try';
import Services from './services';
import Animate from './animate';
import WhatsAppIcon from './chat';
import Prime from './prime';
import MoreServices from './moreServices';


function App() {
  

  return (
    <BrowserRouter>
    <WhatsAppIcon />
      <Routes>
          <Route path='/about-us' element={
            <>
            <Header />
            <AboutUs />
            <Footer />
            </>
          } />
    
           <Route path='/capabilities' element={
            <>
            <Header />
            <Footer />
            </>
          } />
           <Route path='/careers' element={
            <>
            <Header />
            <Careers />
            <Footer />
            </>
          } />
           <Route path='/innovation' element={
            <>
            <Header />
            <Innovation />
            <Footer />
            </>
          } />
           <Route path='/emergency-service' element={
            <>
            <Header />
            <Emergency />
            <Footer />
            </>
          } />
           <Route path='/customer-care' element={
            <>
            <Header />
            <Customer />
            <Footer />
            </>
          } />

          <Route path='/contact-us' element={
            <>
            <Header />
            <ContactUs />
            <Footer />
            </>
          } />
           <Route path='/' element={
          <>
          <NetworkCommunications />
          <About />
          <Services />
          <Animate />
          <Smart />
          <Network />
          <Map />
          <Explore />
          <Footer />
          </>
          } 
          />
          <Route path='/about-primeLine' element={
          <>
          
          <Header />
          <Prime />
          <Footer />
          </>
          } 
          />
          <Route path='/services' element={
          <>
          
          <Header />
          <MoreServices />
          <Footer />
          </>
          } 
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App
