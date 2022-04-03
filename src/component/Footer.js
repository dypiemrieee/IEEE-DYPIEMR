import React from 'react';
import styled from 'styled-components';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { GoLocation } from 'react-icons/go';
import { SiWebpack } from 'react-icons/si';

import './footer.css';

const FooterPart = styled.div`
   padding:2rem 3rem;
   background-color:#000;
   color:white;
   width:100%;
   height:100%;
   position:relative;
   display:flex;
   flex-direction:column;
   align-items:center;
  .foot{
    display: flex; 
    flex-direction: row;
    height: 100%;
  }
   @media  screen and (max-width:500px){
       padding:2rem 1rem;
       .foot{
           align-items:space-around;
           flex-direction:column;
       }
   }
   
`;
const ColumnLeft = styled.div`
  justify-content:space-around;
  align-items:start;
  height:70%;
  width:50%;
  padding:2rem;
  display:flex;
  flex-direction:column;
  align-items:left;
  @media  screen and (max-width:500px){
      width:100%;
      padding:1rem;
   }
  
`;

const ColumnRight = styled.div` 
  height:60%;
  width:50%;
  padding:2rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  @media  screen and (max-width:500px){
       width:100%;
       padding:0.5rem;

       h1{font-size:1.5rem;}
   }


`;
const SocialIcon = styled.div`
 margin-top:30px;
 height:20%;
 width:40%;
 display:flex;
 font-size:50px;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
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
   @media  screen and (max-width:500px){
        width:100%;
        font-size:40px;
           }
`;

const Data = styled.div`
  height:40%;
  width:70%;
  margin:1rem 0;
  display:flex;
  flex-direction:row;
  justify-content:space-between;


  @media screen and (max-width:500px){
      width:90%;
      height:20%;
  }

`;
const IconData = styled.div`
   width:90%;
   @media screen and (max-width:500px){
      width:70%;
      height:5%;

  }
`;


const Footer = ({ col1head, col1para, col2head, location, address, phone }) => {
    const currentyear = new Date().getFullYear()
    return (
        <footer>
            <FooterPart>
                <div className='foot' >
                    <ColumnLeft>


                        <h1>{col1head}</h1>
                        <p>{col1para}</p>
                        <SocialIcon>
                            <a href='https://www.youtube.com/channel/UCLSard1wz231ms7UW5Ft3ZA' target="_blank" rel="noopener noreferrer" >
                                <FaYoutube className='iconss' style={{ backgroundColor: 'red' }} />

                            </a>
                            <a href='https://www.instagram.com/dypiemr.ieee/' target="_blank" rel="noopener noreferrer" >
                                <FaInstagram className='iconss' style={{ backgroundColor: '#CA4676' }} />

                            </a>
                            <a href='https://www.linkedin.com/in/ieee-dypiemr-337204220/' target="_blank" rel="noopener noreferrer" >
                                <IoLogoLinkedin className='iconss' style={{ backgroundColor: '#05224C' }} />

                            </a>
                        </SocialIcon>

                    </ColumnLeft>
                    <ColumnRight>

                        <h1 style={{ margin: "1rem 0" }}>{col2head}</h1>
                        <Data>
                            <GoLocation style={{ fontSize: "30px" }} />
                            <IconData>{location}</IconData>
                        </Data>
                        <Data>
                            <BsTelephoneOutboundFill style={{ fontSize: "30px" }} />
                            <IconData>{phone}</IconData>
                        </Data>
                        <Data>
                            <SiWebpack style={{ fontSize: "30px" }} />
                            <IconData>{address}</IconData>
                        </Data>
                    </ColumnRight>
                </div>
                <div className='footerdev'>
                    <h3 >This website is  developed   & designed by :</h3>
                    <div className='footerimgs'>
                        <div className='footerimg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Fwhite-gauravfooter.jpeg?alt=media&token=64195f41-3d3e-4602-a8a9-157d8f0a0f50' alt='' />
                            <h4>Gaurav Bhukte</h4>
                        </div>
                        <div className='footerimg'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/team%2Fsushant.jpeg?alt=media&token=28155628-94f2-40ac-b85e-27004030f6d3' alt='' />
                            <h4>Sushant Jadhav</h4>
                        </div>
                    </div>
                </div>


                <h6 style={{
                    position: 'relative', textAlign: 'center', bottom: '10px', fontSize: "18px", fontWeight: '400'
                }}>Copyright @ {currentyear} All rights reserved | IEEE DYPIEMR</h6>
            </FooterPart>
        </footer>
    );
};

export default Footer;
