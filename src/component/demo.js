import React from 'react';
import styled from 'styled-components';
import { CoreTeam } from '../data/Board';


const Section = styled.section`
    width:100%;
`;
// const BoardContainer = styled.div`
//     height:90vh;
//     padding: 3rem 2rem;
//     display:flex;
//     flex-direction:column;
//     justify-content:space-between;
//     align-items:center;
    
//    h2{
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: 600;
//     font-size: 15px;
//     line-height: 49px;
//     margin-bottom:2rem;
//     text-align: center;
//     color: #19338F;   };

//     h1{
//         font-family: Montserrat;
//         font-style: normal;
//         font-weight: bold;
//         font-size: 30px;
//         line-height: 64px;
//         margin-bottom:2rem;
//         text-align: center;
        
//         color: #000000;
//          @media screen and (max-width:500px){
//              font-size:20px
//          }

//     }

   
// `;
// const Faculty = styled.div`
//     height:100%;
//     width:100%;
//     display :flex;
//     flex-flow:row nowrap;
//     justify-content:space-between;
     
//     @media screen and (max-width:768px){
//         flex-flow:row wrap;
//         justify-content:center;

// }

// `;
// const FacultyInfo = styled.div`
//     padding:0.5rem 1rem;
//     height:50%;
//     width:50%;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//    img{
//        width:50%;
//    }

//     h2{
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 100%;
//     color: #000000;
   
//     @media screen and (max-width:500px){
//         height:20%;
//         font-size:60%
//     }
//     }

//     h3{
//      margin:0;   
//     font-family: Montserrat;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 15px;
//     text-align: center;
//     position:relative;
//     bottom:30px;

//     color: #292EC9;
//     @media screen and (max-width:400px){
//         font-size:10px;
//         width:100%;
//     }
//     }
// `;

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
    font-size:100%;
    @media screen and (max-width:450px){
        height:60%;
        font-size:80%;
   }
`;
const Core = styled.div`
 width:70vw;
 height:70vh;
 margin-top:2rem;
 padding:0 2rem;
 display:flex;
 flex-flow: row wrap;
 
 justify-content: center;
 @media screen and (max-width:950px){
     width:100%;
     height:90vh;
     padding:2rem;
   }
  

`;
const CoreCard = styled.div`
   margin:1rem 1.5rem;
   width:25%;
   height:40%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

   h1{
       font-size:15px;
       text-align:center;
       @media screen and (max-width:768px){
       font-size:10px
   }
   }
   p{
       font-size:10px;
       @media screen and (max-width:768px){
       font-size:8px
   }
   }

   @media screen and (max-width:768px){
       width:35%;
       height:25%;
   }
   
   @media screen and (max-width:450px){
       width:25%;
       height:15%
   }
  

`;
const Cardimg = styled.img`
   border-radius:15px;

   width:90%;
   height:90%;
   object-fit:cover;

   
   @media screen and (max-width:500px){
    border-radius:50%;
   
   }
`;



const BoardSection = ({ boardFaculty }) => {
    return <Section id='board'>
        <IeeeCoreTeam>
            <h3>Meet Our Team</h3>
            <h1>IEEE DYPIEMR COUNCIL 2021 - 22</h1>
            <Core>
                {
                    CoreTeam.map((person, index) => {
                        return (
                            <CoreCard key={index}>
                                <Cardimg src={person.image} />
                                <h1>{person.name}</h1>
                                <p>{person.Position}</p>
                            </CoreCard>
                        )
                    })
                }

            </Core>

        </IeeeCoreTeam>

    </Section>;
};

export default BoardSection;
