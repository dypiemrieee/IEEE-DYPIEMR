import React, { useState, useEffect } from 'react';
import EventSection from '../component/EventSection';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { db } from '../firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import '../component/eventTimeline.css'
import EventModal from '../component/EventModal';
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

const Section = styled.section`
  width:100%;
  height:100%;
  display:flex;

  flex-direction:column; 


  .head{
    position:relative;
    margin-top:10%;
    display:flex;
    justify-content:center;
    font-size:40px
  }
  .subhead{
    font-size:20px;
    margin-top:2%;

    position:relative;
    justify-content:center;
    display:flex;
  }
  @media screen and (max-width:500px){
    .head{
      margin-top:15%;
      font-size:20px;
    }
    .subhead{
      padding:5px 10px;
      margin-top:5%;
      font-size:15px;
      text-align:center;

    }
  }
 
`

const EurekaContainer = styled.div`
    margin:2rem 0;
    width:60vw;
    height:80vh;
    background-color:black;
    display:flex;
    flex-direction:column;
    align-self:center;
    border-radius:25px;
    justify-content:space-around;
    align-items:center;
    padding:3rem 4rem;
    
    h1{
       height:10%;
      font-size:30px;
      color:#19FC30;
    }
    .Eureka-data{
      color:white;
      width:80%;
      text-align:center;
      font-size:20px
    }
    h4{
      height:10%;
      font-weight:400;
      color:white;
    }
    @media screen and (max-width:500px){
        height:100%;
        width:80vw;
        padding:1rem 1.5rem;
        text-align:center;
        h1{
          margin:1rem 0;
          font-size:20px
        }
        .Eureka-data{
          margin:1rem 0;

          width:100%;
          font-size:15px;
        }
        h4{
          margin:1rem 0;

          height:5%;
        }
    }
`

const EurekaButton = styled(Link)`
    background :#000;
        white-space:nowrap;
        border:none;
        width:300px;
        height:80px;
        border: 1px solid  #19FC30;
        border-shadow: 'none';
        box-sizing: border-box;
        cursor:pointer;
        text-decoration:none;
        border-radius:5px;
        transition:0.6s ease-in;
        display:flex;
        justify-content :center;
        align-items:center;
        font-size:30px;
        font-weight:800;
        color: #fff;
        margin:2rem 0;
        &:hover{
          background :#19FC30;
          border-shadow:'0px 10px 18px rgba(77, 185, 12, 0.41)';
          color:black;


        }
        @media screen and (max-width:500px){
          font-size:20px;
          width:80%;
          height:10%;
        }
`;


const EventPage = () => {


  const [loading, setloading] = useState(false);
  const [event, setEvent] = useState([]);
  const [modal, setModal] = useState(false)
  const eventsCollectionRef = collection(db, 'events');
  const q = query(eventsCollectionRef, orderBy("date", "desc"))


  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(q);
      setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 600)
    getEvents();
    return () => {
      setEvent({});
    };
  }, [])
  return <>
    {
      loading ?
        <LoadingScreen>
          <HashLoader color={'#19FC30'}
            size={150} />
        </LoadingScreen>

        :
        <Section>
          <div style={{
            position: 'relative',
            top: "50px",
            color: '#19FC30',
            height: '100vh',
            width: '100vw',
            backgroundColor: "#000"

          }}>
            <h2 data-aos='fade-up' className='aboutheading'
              style={{
                height: '60%',
                display: "grid",
                placeItems: 'center',
                fontSize: '5rem',
              }}>Events</h2>
          </div>


          <h2 className='head' data-aos='fade-up'>Our Events  -2021 -22</h2>
          <span data-aos='fade-up' className='subhead'>Some of the events conducted by IEEE DYPIEMR throughout the year</span>
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <EventSection events={event} setModal={setModal}/>
            {
              modal && <EventModal setModal={setModal}/>
            }
          </div>
          <EurekaContainer>
            <h1 >
              IEEE DYPIEMR Eu-Reka</h1>
            <hr style={{ color: 'white', width: '20%' }} />
            <span className='Eureka-data'>
              A unique opportunity to showcase your talent in knowledge-sharing skills
              work for noble social cause in the field of education
              network with like-minded people across the nation .
            </span>
            <h4>Want to see our team of EuReka 2021 , Click Below</h4>
            <EurekaButton to='/eureka'>Eureka 2021</EurekaButton>
          </EurekaContainer>
        </Section>}
  </>
};

export default EventPage;
