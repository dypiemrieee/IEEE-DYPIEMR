import React, { useEffect } from 'react'
import $ from 'jquery';
import './facultyinfo.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Facultyinfo = ({ faculty }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    $(function () {
        $('.carousel-item').eq(0).addClass('active');
        var total = $('.carousel-item').length;
        var current = 0;
        $('#moveRight').on('click', function () {
            var next = current;
            current = current + 1;
            setSlide(next, current);
        });
        $('#moveLeft').on('click', function () {
            var prev = current;
            current = current - 1;
            setSlide(prev, current);
        });
        function setSlide(prev, next) {
            var slide = current;
            if (next > total - 1) {
                slide = 0;
                current = 0;
            }
            if (next < 0) {
                slide = total - 1;
                current = total - 1;
            }
            $('.carousel-item').eq(prev).removeClass('active');
            $('.carousel-item').eq(slide).addClass('active');
            setTimeout(function () {

            }, 800);



            console.log('current ' + current);
            console.log('prev ' + prev);
        }
    });


    return (<div className='main'>
        <div className="carousel" data-aos='fade-up'>
            <div className="carousel__nav">
                <span id="moveLeft" className="carousel__arrow">
                    <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                    </svg>
                </span>
                <span id="moveRight" className="carousel__arrow" >
                    <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                </span>
            </div>
            {
                faculty.map((item, index) => {
                    return (
                        <div className="carousel-item carousel-item--1" key={index}>
                            <img className="carousel-item__image" src={item.image} alt='' />
                            <div className="carousel-item__info">
                                <div className="carousel-item__container">
                                    <h2 className="carousel-item__subtitle">{item.position}</h2>
                                    <h1 className="carousel-item__title">{item.name}</h1>
                                    <p className="carousel-item__description">{item.msg}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    </div>


    )
}

export default Facultyinfo