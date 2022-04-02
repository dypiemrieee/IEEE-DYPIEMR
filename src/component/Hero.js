import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroSection = styled.section`
  position:relative;
    width:100%;
    height:100%;
    
    display:flex;
    align-items:center;
    padding:3rem 2rem;
    justify-content:center;
    @media screen and (max-width:500px){
        height:100%;
        width:100%;
    }

  
`
const HeroImage = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  max-width:100%;
  ${'' /* object-fit:cover; */}
  filter: brightness(80%);
   
  .herovid{

      width:100%;
      height:100%;
      object-fit:cover;
  }
  @media screen and (max-width:500px){
      width:100%;
      height:100%
  }
`;
const HeroContent = styled.div`
   height:100vh;
   width:100%;
   padding:3rem 4rem;

   ${'' /* margin-left:20vw; */}
    position:relative;
    z-index:10;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;

    color:#fff;
    @media  screen and (max-width:500px){
            justify-content:center;
            height:100%;
            width:100%;
            padding:1rem 0.5rem;
   }

`;

const Heroheading = styled.div`
    height:50vh;
   width:70%;
   display:flex;
   align-items:center;
   justify-content:center;
   h1{

      font-size:60px;
      text-align:left;
      font-weight:900;
      
   }
   @media  screen and (max-width:500px){
       width:100%;
       h1{
           font-size:25px;
       }
   }

`

const TextTypewritter = styled.div`
   height:50vh;
   width:100%;
   display:flex;
   font-size:45px;
   justify-content:flex-start;
   align-items:flex-start;

   @media  screen and (max-width:500px){
       font-size:20px;
       width:100%;
       height:30vh
   }
`



const Hero = ({ slides }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const hero_video = 'https://firebasestorage.googleapis.com/v0/b/ieeedypiemr.appspot.com/o/hero%2FHeroVid.mp4?alt=media&token=b554106b-5061-4cb0-b60c-0922931902bc';
    return (
        <HeroSection id='home'>


            <HeroImage >
                    <video src={hero_video} autoPlay loop muted className='herovid'/>

            </HeroImage>

            <HeroContent >
                <Heroheading>
                    <h1>IEEE DYPIEMR STUDENT BRANCH</h1>

                </Heroheading>
                <TextTypewritter>
                    {"<"} <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            strings: [
                                'Advancing the Technologies',
                                'Innovation is in our Core',
                                
                            ],

                        }}
                    />{"/>"}

                </TextTypewritter>
            </HeroContent>


        </HeroSection>);

};

export default Hero;
