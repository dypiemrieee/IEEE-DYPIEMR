import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../features/channelSlice'
import './eventTimeline.css'

const EventCard = ({ eventi, id, setModal }) => {

    const dispatch = useDispatch();

    const setChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
        }));

        setModal(true);

    }
    return (
        <div data-aos="fade-right" className='timeline-item' onClick={setChannel}>

            <div className='timeline-content' >
                <h1 >{eventi.eventName}</h1>

                <p >{eventi.description.slice(0, 500)}
                </p>
                <img className='eventimage' src={eventi.posterImage} alt='event' />

            </div>

        </div>
    )
}

export default EventCard