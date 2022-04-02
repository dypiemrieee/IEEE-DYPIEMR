import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { getDoc, doc, query } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../features/channelSlice';

import Aos from 'aos';
import 'aos/dist/aos.css';
const EventModal = ({ setModal }) => {
    const eventId = useSelector(selectChannelId);
    const [events, setEvents] = useState([]);

    const eventsdocRef = doc(db, 'events', eventId);
    const q = query(eventsdocRef)


    useEffect(() => {
        Aos.init({ duration: 1000 })
        const getEvents = async () => {
            const data = await getDoc(q);
            setEvents(data.data());
        }
        getEvents();
    }, []);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title" data-aos='fade'>


                    <h1>{events.eventName}</h1>
                    <img className='modalImage' src={events.posterImage} alt='' />
                    <p className='eventDescription'>{events.description}</p>


                </div>

            </div>
        </div>
    )
}

export default EventModal