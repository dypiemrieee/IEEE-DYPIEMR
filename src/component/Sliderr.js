import React, { useState, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Events } from '../data/Eventdata';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';



const Card = styled.div`
  height:300px;
  width:60%;
  overflow:hidden;
  border-radius:16px;
  cursor:pointer;
  position:relative;
  left:5vw;
  background-color:#fff;
  display:flex;
  color:#000;
  h1{
    display:flex;
    width:100%;
    justify-content: center;
    align-items:flex-end;
    
    z-index:1;
   

  }
  @media screen and (max-width : 1100px ) and (min-width:500px){
    width:80%;
    left:8vw;
    height:350px
  }
  @media screen and (max-width : 500px){
    width:100%;
    left:0;
      }
 
 
  

`
const Cardimg = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:2;
  background-color:#fff;
  transition:2s;
  padding:1rem;

  

  &:hover{
    transform:translateY(-70px );
    transition:all 0.3s;
  }

  img{
    width:100%;
    height:100%;
    objectFit:cover;

    &:hover{
      opacity:4;
      transition:5s;
    }
  }
 
   
`;

const CardWrapper = styled.div`
    position:relative;
    width:100%;
    padding:0 2rem;
    box-sizing:border-box;
    
    &:active ,&hover,&focus{
      outline:none;
      border:none;
    }

  
`



const Sliderr = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    swipeToSlide: true,
    autoPlay: true,
  };

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();

  const Desktop = "1100";




  return (
    <div style={{ width: '100vw', height: '100%', padding: '1.5rem 4rem' }} >
      <Slider {...settings} slidesToShow={width > Desktop ? 3 : 1}>
        {
          Events.map((eventi, index) => {
            return (
              <CardWrapper key={index}>
                <Card>
                  <Cardimg>
                    <img src={eventi.image} alt='fg' />

                  </Cardimg>
                  <h1>{eventi.eventName}</h1>

                </Card>

              </CardWrapper>
            )
          })
        }
      </Slider>
    </div>

  )
};

export default Sliderr;
