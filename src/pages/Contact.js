import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FormElement from '../component/FormElement';
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsHandIndexThumb } from 'react-icons/bs';
import HashLoader from "react-spinners/HashLoader";
import Mapsection from '../component/Mapsection';
import { FooterData } from '../data/Footerdata';
import ContactImg from '../images/herosection/contact.png'

const ContactSection = styled.section`
  background-color:#19338F;
  padding:2rem;
  height:100%;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
    align-items:center;
  border-radius:15px;

@media(max-width:800px){
    flex-direction:column;
    padding:10px;
    justify-content:center;
    align-items:center;
}
  `;
const SocialMediaHandles = styled.div`
  min-height:75vh;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  color:white;
  padding:1rem 4rem;
  h1{
      width:100%;
      font-size:35px;
  }
  p{
      margin-top:1rem;
      width:70%;
      font-size:20px;
  }
  .contactimg{
      width:70%;
      height:60%;
      padding:1.5rem;
      object-fit:cover;
  }

  @media(max-width:450px){
    height:100%;
    width:100%;
    h1{
        font-size:25px;
    }
    p{
        font-size:15px;
    }
    .contactimg{
        padding:0;
        height:100%;
        width:100%;
    }
  }
`;
const ContactForm = styled.div`
  height:100%;
  width:60%;
  padding:3rem;
  @media(max-width:800px){
    margin-top:1rem;
    height:100%;
    width:100%;
    padding:10px
  }
`;


const FormContent = styled.div`
   height:100%;
   width:100%;
   border-radius:25px;
   background-color:white;
   display:flex;
   justify-content:space-around;
   align-items:center;
  ${'' /* padding:1rem; */}

  .form{
      width:80%;
      height:90%;
      padding:10px;
  }
    .Submit_Button{
        padding:0.5rem;
        margin:0.5rem;
        background-color:#86C6F4;
        height:15%;
        width:50%;
        border-radius:15px;
        border:none;
        outline:none;
        font-size:25px;
        transition:all 0.3s ease-in-out;
        &:hover{
            background-color:#139487;
            color:white;
        }
        
    }
    @media(max-width:450px){
    height:100%;
    width:100%;
    padding:10px;
    .form{
        width:100%;
        height:100%;
    }
    .Submit_Button{
        width:80%
    }
  }
`;
const SocialAddress = styled.div`
   width:60%;
   height:60px;
   display:flex;
   padding:1rem 0;
   align-items : center;
   justify-content:space-around;
   border:2px solid #3078CB;
   border-radius:15px;
   font-size:25px;
   transition:all 0.3s linear;
   cursor:pointer;
   text-align:center;
   a{
    text-decoration:none;
    color:white;
    width:70%;
    transition:all 0.3s linear;
    &:hover{
       width:80%;
    }
   }
   .thumb{
       transform:rotate(90deg);
       color:white;
       animation:animate 2s linear infinite;

       @keyframes animate {
           0%{
               transform:translateX(0) rotate(90deg);
           }
           100%{
               transform : translateX(20px) rotate(90deg);
           }
       }
   }
   @media screen and (max-width:450px){
       align-items:space-around;
         width:100%;
         height:50%;
         a{
            width:100%;
         }
         .thumb{
             display:none;
         }
   }
`;
const SocialIcon = styled.div`
   width:100%;
   height:70px;
   padding:0.8rem;
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   font-size:50px;
   align-items:center;

   .iconss{
       padding:10px;
       border-radius:50%;
       background-color:transparent;
       object-fit:contain;
       cursor:pointer;
       transition : all 0.2s ease-in-out;
       color:white;
       &:hover{
    background-color: blue;
    box-shadow: 1px 4px 34px 11px rgba(0,0,0,0.33);
-webkit-box-shadow: 1px 4px 34px 11px rgba(0,0,0,0.33);
-moz-box-shadow: 1px 4px 34px 11px rgba(0,0,0,0.33);
}

   }
   @media screen and (max-width:450px){
    height:100%;
    padding:0;
    width:100%;
    flex-direction:column;

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
    display:grid;
    place-items:center
`


const Contact = () => {


    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 600)
    }, [])
    const [link, setLink] = useState('youtube');
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [linkaddress, setlinkaddress] = useState('https://www.youtube.com/channel/UCLSard1wz231ms7UW5Ft3ZA');

    const handleSubmit = () => {
        alert("Your Response is Submitted SuccessFully")
    }

    return <>
        {
            loading ? <LoadingScreen>
                <HashLoader color={'#19FC30'}
                    loading={loading}
                    size={150} />
            </LoadingScreen> : <div style={{
                padding: '7rem 1rem 0',
                width: '100%',
                height: '100%',
            }}>
                <ContactSection>
                    <SocialMediaHandles>
                        <div>
                            <h1>Contact Us</h1>
                            <p>For any queries please fill the form we will get back to you!</p>
                        </div>
                        <img src={ContactImg} alt='contact' className='contactimg' />


                        <SocialIcon>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <FaYoutube className='iconss' style={{ backgroundColor: selected1 ? 'red' : 'transparent' }} onClick={() => {
                                    setLink('IEEE-DYPIMER');
                                    setlinkaddress('https://www.youtube.com/channel/UCLSard1wz231ms7UW5Ft3ZA')
                                    setSelected1(true)
                                    setSelected2(false);
                                    setSelected3(false);
                                }} />
                                <FaInstagram className='iconss' style={{ backgroundColor: selected2 ? '#CA4676' : 'transparent' }} onClick={() => {
                                    setLink('dypiemr.ieee');
                                    setlinkaddress('https://www.instagram.com/dypiemr.ieee/')
                                    setSelected1(false)
                                    setSelected2(true);
                                    setSelected3(false)
                                }} />
                                <IoLogoLinkedin className='iconss' style={{ backgroundColor: selected3 ? '#05224C' : 'transparent' }} onClick={() => {
                                    setLink('ieee-dypiemr');
                                    setlinkaddress('https://www.linkedin.com/in/ieee-dypiemr-337204220/');
                                    setSelected1(false)
                                    setSelected2(false);
                                    setSelected3(true)
                                }} />
                            </div>


                            <SocialAddress>  <BsHandIndexThumb className='thumb' /><a href={linkaddress} target="_blank" rel="noopener noreferrer" >
                                {"@" + link}
                            </a> </SocialAddress>
                        </SocialIcon>
                    </SocialMediaHandles>
                    <ContactForm>
                        <FormContent>
                            <form className='form' onSubmit={handleSubmit}>
                                <FormElement lname='Name' emogi='💻' inputT={false} />
                                <FormElement lname='Email' emogi='✉️' inputT={false} />
                                <FormElement lname='Message' emogi='📖' inputT={true} />
                                <button className='Submit_Button' type='submit'>Submit</button>
                            </form>
                        </FormContent>
                    </ContactForm>
                </ContactSection>
                <Mapsection {...FooterData} />
            </div>}
    </>
}

export default Contact