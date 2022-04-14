import React from 'react';
import { Navbar, GlobalStyle, } from './component/paths';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './component/Footer';
import EventPage from './pages/EventPage';
import { FooterData } from './data/Footerdata';
import EurekaPage from './pages/EurekaPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';



const App = () => {


    






    return (
        <>
            <GlobalStyle />
            <Navbar  />

            <Routes>
                <Route path="/" element={<Homepage />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/event" element={<EventPage />} />

                <Route path='/eureka' element={<EurekaPage />} />
                <Route path="/board" element={<TeamPage />} />
                <Route path='/gallery' element={<GalleryPage />} />

                <Route path='/contact' element={<Contact />} />

            </Routes>



            <div className='footer' level={0}>
                <Footer {...FooterData} />
            </div>

        </>




    )
};

export default App;
