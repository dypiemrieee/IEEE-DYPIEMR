import React, { useEffect } from 'react';
import './eventTimeline.css'
import rocket from '../images/EventSection/timeline/Rocket.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

import EventCard from './EventCard';


const EventSection = ({ events, setModal }) => {




    useEffect(() => {

        Aos.init({ duration: 1000 });
        const circle = document.querySelector('.circle');


        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const val = scrolled * 3;
            circle.style.transform = `translateY(${0.4 * val}%)`


        })



    }, [])






    return (<>


        <div className='container' >

            <img src={rocket} alt="img" className='circle' />

            <div className='timeline'>

                {
                    events.map((eventi, index) => {
                        return (
                            <EventCard eventi={eventi} key={index} id={eventi.id} setModal={setModal} />

                        )
                    })
                }
            </div>
        </div>
    </>


    );
};

export default EventSection;
