import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IEEETeams } from '../data/Board';
import './eventTimeline.css'
import TeamCard from './TeamCard'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { db } from '../firebase/firebase'
import './Board/board.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import Corecard from './Board/Corecard';
const Section = styled.section`
    width:100%;
`;

const IeeeCoreTeam = styled.section`
    color:white;
    box-sizing:border-box;
    padding:10rem 1.5rem;
    color:black;
    height:100%;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    text-align:center;
    
    .corehead{
        font-size:15px
    }
    .coreclassname{
        margin-top:12px;
        font-size:30px
    }
     
    @media screen and (max-width:450px){
        height:60%;
        font-size:80%;
   }
`;
const Core = styled.div`
 width:80vw;
 min-height:90vh;
 height:100%;
 margin-top:5rem;
 padding:0 2rem;
 display:flex;
 flex-flow: row wrap;
 justify-content: center;


 @media screen and (max-width:950px){
     width:100%;
     height:100%;
     padding:2rem;
   }
   @media screen and (max-width:450px){
     width:100vw;
     height:100%;
     padding:2rem;
     flex-direction: column;
     justify-content: space-between;

   }

`;


const TeamSection = styled.section`
    height:100%;
    weight:100vw;
    padding:1.5rem 1rem;
    display:flex;
    flex-flow: row wrap ;
    justify-content:center;
    align-items:flex-start;
    position:relative;

`;
const BoardSection = () => {
    const [coreTeami, setCoreTeam] = useState([]);

    const eventsCollectionRef = collection(db, 'teams');

    const stateQuery = query(eventsCollectionRef, where("pref", "<=", 5));


    const getTeams = async () => {

        const querySnapshot = await getDocs(stateQuery);
        const items = [];

        querySnapshot.forEach((doc) => {
            items.push(doc.data());
        })
        setCoreTeam(items);

    }




    useEffect(() => {



        getTeams();
        return () => {
            setCoreTeam({});
        };
    }, [])



    useEffect(() => {


        Aos.init({ duration: 1000 })
    }, [])

    const sushant = 'https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Fsushant.jpeg?alt=media&token=28155628-94f2-40ac-b85e-27004030f6d3';

    const aditi = 'https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Faditi.jpeg?alt=media&token=b7553c1c-ee24-412b-9054-ba9f5f095b39';
    // console.log(webmaster)
    return <Section id='board'>
        <IeeeCoreTeam>
            <h3 data-aos='fade-up' className='corehead'>Meet Our Team</h3>
            <h1 data-aos='fade-up' className='coreclassname'>IEEE DYPIEMR COUNCIL 2021 - 22</h1>
            <Core data-aos='fade-up'>

                {
                    coreTeami.map((person, index) => {
                        return (

                            <Corecard key={index}
                                name={person.Name}
                                msg={person.personMsg}
                                linkedin={person.linkedIn}
                                position={person.post}
                                image={person.Image} />

                        )
                    })
                }


            </Core>

        </IeeeCoreTeam>
        <TeamSection data-aos='fade-right' >
            <TeamCard heading='Web Masters' team={IEEETeams.webmaster} name='Sushant Jadhav' position='UI UX Designer' image={sushant} />
            <TeamCard heading='Event Management' team={IEEETeams.EventManagement} name='Aditi Gangurde' position='Head' image={aditi} />
            <TeamCard heading='Publicity' team={IEEETeams.Publicity} />
            <TeamCard heading='Social Media' team={IEEETeams.SocialMedia} />
            <TeamCard heading='Art & Design' team={IEEETeams.ArtAndDegign} />
            <TeamCard heading='IEEE ASSOCIATES' team={IEEETeams.IeeeAssociates} />


        </TeamSection>
    </Section>;
};

export default BoardSection;
