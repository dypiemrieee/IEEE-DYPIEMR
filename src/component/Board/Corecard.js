import React from 'react'
import './board.css'
import { BsLinkedin } from 'react-icons/bs'
const Corecard = ({ name, msg, position, linkedin, image }) => {
    return (
        <div class="card__collection clear-fix">
            <div class="cards cards--two">
                <img src={image} class="img-responsive" alt="Cards" />
                <span class="cards--two__rect">

                </span>
                <span class="cards--two__tri"></span>
                <p>{name}</p>
                <br />
                <p className='position'>{position}</p>
                <ul class="cards__list">
                    <li className='linkedIn'><a href={linkedin} target="_blank" rel="noopener noreferrer" >
                        <BsLinkedin size='2rem' color='blue' />
                    </a></li>

                </ul>
                <div className='msg'>
                    {msg}
                </div>
            </div>

        </div>)
}

export default Corecard