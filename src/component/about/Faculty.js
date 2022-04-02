import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';
const MessageFaculty = styled.section`
   width:100vw;
   height:100%;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-items:center;
   h1{
       margin:1rem 0;
       font-size:2rem;
   }
   @media screen and (max-width:500px){
       width:80%;
       
       align-self:center;
       flex-flow:row wrap;

       h1{
           font-size:1rem;
           text-align:center;
       }
   }
`
const Facultysec = styled.div`
    margin:2rem 0;
    height:40vh;
    width:70%;
    display:flex;

    flex-direction:${({ num }) => (num % 2 === 0 ? 'row-reverse' : 'row')};
    box-shadow: 3px 6px 17px -4px rgba(0,0,0,0.64);
-webkit-box-shadow: 3px 6px 17px -4px rgba(0,0,0,0.64);
-moz-box-shadow: 3px 6px 17px -4px rgba(0,0,0,0.64);
  @media screen and (max-width:500px){
     margin:2rem;
     position:relative;
     height:35vh;
     width:80%;
     &:focus{
                img{
                    position:absolute;
                    width:0%;
                    height:100%;
                    top:-35px;
                    z-index:-10;
                    
                }
               
               .message{
                transition: all 0.9s linear ;

                   display:block;
                   position:absolute;
                    top:0;
                    z-index:50;
               }
        }
  }
`

const FacultyImage = styled.div`
    height:100%;
    width:30%;
    background-color:#19FC30;
    position:relative;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
        
    }
    @media screen and (max-width:500px){
        width:100%
       
    }
   
`
const Message = styled.div`
    background-color:#000;
    height:100%;
    width:70%;
    color:white;
    display:flex;
    flex-direction:column;
    padding:0.5rem;

    place-items:center;
   
   h2{
       height:20%;
       text-align:left;
       width:80%;
       height:20%;
       color:#19FC30;
        font-size:10px;
   }

    p{
        height:80%;
        width:80%;
        font-size:1rem;
        display:grid;
        color:white;
        place-items:center;

    }
    @media screen and (max-width:500px){
        width:100%;
        height:100%;
        padding:0;
        display:none;
        padding:10px;
        h2{
            height:10%;
            width:100%;
            font-size:1rem;
            text-align:center;
        }
        p{
            width:100%;
            height:90%;
            font-size:0.8rem;
            text-align:center;

        }
    }

`


const Faculty = ({ faculty }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (<>
        <MessageFaculty>
            <h1>Message from our Faculty </h1>
            {
                faculty.map((facultydata, index) => {
                    return (
                        <Facultysec key={index} num={index + 1} data-aos='fade-left'>
                            <FacultyImage>
                                <img src={facultydata.image} alt='faculty' />
                            </FacultyImage>
                            <Message className='message'>
                                <p className='msg'>{facultydata.msg.slice(0,500)}</p>
                                <h2>{facultydata.name + " | " + facultydata.position}</h2>

                            </Message>
                        </Facultysec>
                    )
                })
            }


        </MessageFaculty>
    </>
    )
}

export default Faculty