import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import design from '../images/EventSection/timeline/design.png'
import RingLoader from "react-spinners/RingLoader";
import EurekaContent from '../component/Eureka/EurekaContent';
import Aos from 'aos';
import 'aos/dist/aos.css';

const EurekaSection = styled.section`
        background-color:#000;
        box-sizing:border-box;
        height:100%;
        width:100%;
        color: rgba(25, 252, 48, 0.97);

        

`;

const EurekaHero = styled.div`
  background-color:#000;
  padding:10rem 5rem 3rem;
  display:flex;
  flex-Direction:column;
  height:100vh;
  width:100%;
  color:white;
  justify-content:space-between;
 
  .clgname{
font-weight: bold;
font-size: 30px;
line-height: 74px;
width: 50%;
height: 50px;
color: rgba(25, 252, 48, 0.97);
  }

  h2{
    width:50%;
height: 72px;
font-weight: bold;
font-size: 61px;
line-height: 74px;

color: rgba(25, 252, 48, 0.97);
  }

.pos{
font-family: Montserrat;
font-style: normal;
font-weight: 400;
font-size: 20px;
width:50%;

color: rgba(255, 255, 255, 0.97);

  }
 @media screen and (max-width:500px){
   padding:10rem 2rem 0;
   align-items:center;
   justify-content:center;
    div{
      height:20vh
    }
    .clgname{
      font-size:20px;
      height:40%;
      width:100%;
      text-align:center;

    }
    h2{
      text-align:center;
      width:100%;
      font-size:35px;
      line-height:50px;
      height:100%;
    }
    .pos{
      width:100%;
      font-size:15px;
      height:30%;
      text-align:center;

    }
    .rimg{
      display:none;

    }
    .limg{
      top:-10%;
      width:70%;
 }
 }
`;

const RightImg = styled.img`
 width:40%;
 object-fit:cover;
 position:absolute;
 top:15%;
 right:-20%;
 border-radius:50%;
 animation: rot 10s linear infinite;
 
 
 @keyframes rot {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

`

const LeftImg = styled.img`
 width:20%;
 object-fit:cover;
 position:absolute;
  top:60%;
 left:-10%;
 border-radius:50%;

 animation: rot 10s linear infinite;
 
 @keyframes rot {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
`

const LoadingScreen = styled.div`
  
    width:100vw;
    height:100vh;
    background-color:#000;
    position:absolute;
    z-index:1000;
    top:0;
    left:0;
    display:grid;
    place-items:center
`

const EurekaPage = () => {

  const [loading, setloading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 })
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000)
  }, [])


  return <EurekaSection>
    {
      loading ?
        <LoadingScreen>
          <RingLoader color={'#19FC30'}
            loading={loading}
            size={150} />
        </LoadingScreen>


        : <>
          <EurekaHero>
            <div data-aos='fade-up' style={{ width: '100%', height: '30vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
              <h3 className='clgname'>IEEE DYPIEMR</h3>
              <h2>Eureka 2021  </h2>
              <span className='pos'>Our team of IEEE DYPIEMR won Early Bird Award  of the year 2021 </span>
            </div>

            <RightImg className='rimg' src={design} alt='design' />
            <LeftImg className='limg' src={design} alt='design' />


          </EurekaHero>
          <EurekaContent />
        </>

    }

  </EurekaSection>;
};

export default EurekaPage;
