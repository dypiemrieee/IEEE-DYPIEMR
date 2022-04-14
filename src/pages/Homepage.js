import React, { useState, useEffect } from 'react';
import Hero from '../component/Hero';
import styled from 'styled-components';
import { SliderData } from '../component/paths';
import IEEElogo from '../images/herosection/ieeelogo.png';
import HashLoader from "react-spinners/HashLoader";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import ReactPlayer from 'react-player'
import Slider from '../component/home/Slider';
const HomepageView = styled.div`
  width:100%;
  height:100%;
display:flex;
flex-direction:column;
justify-content:center;
 align-items:center;
 @media  screen and (max-width:768px){
       font-size:20px;
       text-align:center;
       background-color:#19338F;
       width:100%;
   }
`;

const IEEEname = styled.div`
    height:30vh;
    width:90%;
    display:flex;
    font-size:45px;
    color:#fff;
    font-weight:700;
    justify-content:center;
    align-items:center; 
    @media screen and (max-width:1200px){
        font-size:35px;
    }
    @media  screen and (max-width:768px){
       font-size:20px;
       text-align:center;
       
   }
`;

const AboutIEEE = styled.div`
    margin:2rem 1rem;
    min-height:45vh;
    height:100%;
    width:100%;
    padding:3rem 6rem;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    @media  screen and (max-width:768px){
       flex-direction:column;
       height:100%;
       width:80%;
       padding:0;
       margin:0;

       align-items:center;
   }

`;

const LogoIEEE = styled.div`
  padding:2rem;
  background-color:#FFF9F9;
  display:grid;
  place-items:center;
  img{
      background-color:#000;

  }
  @media  screen and (max-width:768px){
      margin:1rem;
      background-color:transparent;

      img{
          height:40%;
          object-fit:cover;
      }
   }
  
`;
const AboutContent = styled.div`
  color:#712669;
  padding:3rem;
  background-color:#FFF9F9;
  display:flex;
  align-self:center;
  justify-content:center;
  position:relative;  
  text-align:left;
  flex-direction:column;
  overflow-y:scroll;
  font-family: Montserrat;
  line-height:25px;
  font-weight: 500;
    font-size: 18px;
    width:100vw;
    height:100%;
    p{
        height:100%;
    }
    @media  screen and (max-width:1050px){
       font-size:20px;
       line-height:20px;
       width:70%;
       padding:2rem;
       height:100%;
       text-align:justify;
    }

    @media  screen and (max-width:768px){
       font-size:12px;
       line-height:15px;
       width:60%;
       padding:0;
       height:50%;
       color:white;
       background-color:transparent;
       text-align:justify;
      p{
            width:100%;
      }
       }
`;

const LoadingScreen = styled.div`
  
    width:100vw;
    height:100vh;
    background-color:#000;
    position:absolute;
    z-index:1000;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
   `;

const ReadMore = styled(Link)`
  width:40%;
  height:20%;
  padding:1rem 0;
  display:flex;
  position:relative;
  align-items:center;
  justify-content:flex-start;
  text-decoration : none;
  @media screen and (max-width:768px){
      width:50%;
      padding:0;
      color:#fff;
      .arrow{
          font-size:15px;
          color:#fff;
      }
  }


  .arrow{
      font-size:30px;
      animation: animate 1s infinite ease-in-out;
  }

  @keyframes animate {
      0%{
          transform:translateX(5px);
      }
      100%{
          transform:translateX(30px);
      }
  }
`

const YoutubeVideo = styled.div`
    margin:2rem 4rem;
    height:100%;
    width:80%;
    position:relative;
    ${'' /* justify-self:center; */}
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        color:white;
        padding:3rem 2rem;
        font-size:2.5rem;
    }
    .youtube_video{
        height:100%;
        width:40%;
        position:relative;
        border-radius:25px;
        box-shadow: -1px 4px 12px -6px rgba(255,255,255,0.75);
-webkit-box-shadow: -1px 4px 12px -6px rgba(255,255,255,0.75);
-moz-box-shadow: -1px 4px 12px -6px rgba(255,255,255,0.75);
    }
    @media screen and (max-width:450px){
        margin:1rem;
        width:100%;
        .youtube_video{
            height:80%;
            width:100%;
            object-fit:cover;
        }
    }
`;


const Homepage = () => {

    const [loading, setloading] = useState(false);
    const [event, setEvent] = useState([]);
    // const [modalimg, setmodalImg] = useState(null);
    // const [modal, setModal] = useState(false)

    const eventsCollectionRef = collection(db, 'gallery');
    const q = query(eventsCollectionRef);




    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(q);
            setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }

        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 600);
        getEvents();

    }, [])

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const url = `http://www.youtube.com/embed/J4HmBCfssw8?enablejsapi=1&origin=http://localhost:3001"
    frameborder="0"`;

    // console.log(modalimg)

    return <>

        {
            loading ? <LoadingScreen>
                <HashLoader color={'#19FC30'}
                    loading={loading}
                    size={150} />
            </LoadingScreen> :
                <HomepageView>
                    <Hero slides={SliderData} />
                    <IEEEname data-aos="fade-up">
                        INSTITUTE OF ELECTRONICS & ELECTRICAL ENGINEERS
                    </IEEEname>
                    <AboutIEEE >
                        <LogoIEEE data-aos="fade-right">
                            <img src={IEEElogo} alt='logo' />
                        </LogoIEEE>
                        <AboutContent data-aos="fade-left">
                            <p>The Institute of Electrical and Electronics Engineering (IEEE) is an International organization, which has been the nexus for propagating scientific expertise among people all over the globe. IEEE continues to attract students, faculty and professionals from various fields all around the world and is committed to incorporating diversity in thoughts which is essential for scientific development. IEEE serves as a hub to many engineering students and faculty members for expressing their technical acuity to the world and has always been at the forefront of the technical revolution.</p>
                            <ReadMore className='readMoreabout' to='/about'>Read More <FiArrowRight className='arrow' /></ReadMore>

                        </AboutContent>
                    </AboutIEEE>
                    <YoutubeVideo>
                        <h1>Recent Events</h1>
                        <ReactPlayer type="text/javascript" className='youtube_video' height='50vh' width='80%' url={url} controls />
                        <Slider event={event} />

                    </YoutubeVideo>


                </HomepageView>}

    </>
};

export default Homepage;
