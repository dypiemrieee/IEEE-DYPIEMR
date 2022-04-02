import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import design from '../../images/EventSection/timeline/design.png'
import SliderSection from './SliderSection';
import { collection, query, getDocs } from 'firebase/firestore';
import Aos from 'aos';
import { db } from '../../firebase/firebase';
import 'aos/dist/aos.css';
const Content = styled.div`
height:100%;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
   .secondSection{
       height:10vh;
       text-align:center;
       font-size:3rem;
   }

   .eurekaDetail{
       margin-top:1.5rem;
       display:flex;
       height:100%;
       width:50%;
       color:white;
       text-align:center;
       font-size:25px;
       
}

@media screen and (max-width:500px){
    .secondSection{
        font-size:2rem;
    }
    .eurekaDetail{
        font-size:15px;
        width:80%;
    }
}
`;
const Participant = styled.div`
       z-index:10;
        position:relative;
        height:100%;
        display:flex;
        flex-direction:column;

        .phead{
            margin-top:8%;
            text-align:center;
            color:white
        }
        @media screen and (max-width:500px){
            .phead{
                font-size:15px;
            }
}

`;
const ImageSection = styled.div`
       z-index:10;
position:relative;
     width:100%;
     height:100%;
     padding:5% 10%;
     display:flex;
     flex-direction:row;

     @media screen and (max-width:500px){
     flex-flow:row wrap;
     padding:0 10%;
}
`
const ImageCard = styled.div`
    margin:1rem 0.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:30vh;
    width:100%;
    img{
        height:85%;
        width:70%;
        object-fit:cover;
    }
    h3{
        height:15%;
        width:70%;
        background-color:#78E038;
        color:#000;
        text-align:center;
    }
    @media screen and (max-width:500px){
        justify-content:center;
      width:40%;
      height:20vh;
      img{
          width:100%
      }
      h3{
          width:100%;
          font-size:1rem;
      }
}
`;

const LeftImg = styled.img`
 width:25%;
 object-fit:cover;
 position:absolute;
  top:0;
  z-index:0;
 left:-8%;
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

      @media screen and (max-width:500px){
       top:-8%;
       left:-15%;
}
`;


const Glimpses = styled.div`
      display:flex;
      flex-direction:column;
      height:100%;
      margin-top:1rem;
      justify-content:center;
      align-items:center;

      .Glimpses{
          font-size:2.5rem;
          margin-top:1rem;
          color:white;
         
      }
      .nextbtn{
        margin:10% 0;
        width:30%;
        height:10vh;
        text-align:center;
        color:white;
        border:1px solid #78E038; 
        display:grid;
        place-items:center;
   }

   @media screen and (max-width:500px){
    .nextbtn{
        width:80%;
        font-size:1rem;
    }
}
  

`;


const GlimpseSection = styled.div`
   height:60vh;
   width:100vw;
   padding:1rem 2rem;
   display:flex;
   flex-direction:row;
   justify-content:space-around;


   
   

`
const EurekaContent = () => {
    const [event, setEvent] = useState([]);

    const eventsCollectionRef = collection(db, 'eureka');
    const q = query(eventsCollectionRef)


    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(q);
            setEvent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }


        getEvents();
    }, [])

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (<div>
        <Content data-aos='fade-up'>
            <h1 className='secondSection'>What is Eureka?</h1>
            <p className='eurekaDetail'>Eureka 2020-21.. Eureka is a competition organised by IEEE pune section. This year Students of DYPIEMR TE ENTC participated in Eureka. The competition was to motivate students for higher education in science and technology. Students taught technologies related to agriculture and food processing. We chose 4 schools 3 urban and 1 rural school .</p>
            <br />
            <br />
            <hr style={{ width: '30%', marginTop: '10%' }} />
        </Content>

        <Participant>
            <LeftImg src={design} alt='design' />

            <h1 className='phead'>Our Respresentatives who won it for us </h1>

            <ImageSection data-aos='fade'>
                <ImageCard>
                    <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2FSharmishtha.png?alt=media&token=429997de-165e-4434-ade9-1649ddeb8d2d' alt='img' />
                    <h3>Sharmishtha Mitra</h3>
                </ImageCard>
                <ImageCard>
                    <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2FShantanu.png?alt=media&token=7016787e-6838-4892-92a5-25e790a5b233' alt='img' />
                    <h3>Shantanu Datir</h3>
                </ImageCard>
                <ImageCard>
                    <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Fvaishnavi.jpeg?alt=media&token=8778a133-7ff7-4bfa-8b95-eebbf4b059b7' alt='img' />
                    <h3>Vaishnavi Patil</h3>
                </ImageCard>
                <ImageCard>
                    <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Faditi.jpeg?alt=media&token=b7553c1c-ee24-412b-9054-ba9f5f095b39' alt='img' />
                    <h3>Aditi Gangurde</h3>
                </ImageCard>
            </ImageSection>

        </Participant>
        <Glimpses data-aos='fade-down'>
            <h3 className='Glimpses'>
                Glimpses
            </h3>

            <GlimpseSection>
                <SliderSection glimpse={event} src='glimpse' />
            </GlimpseSection>


            <h1 data-aos='fade-up' className='nextbtn'>Will meet next year.</h1>

        </Glimpses>

    </div>


    )
}

export default EurekaContent