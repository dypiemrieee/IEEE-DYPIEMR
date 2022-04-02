import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
`;
const Container = styled.div`
    height:100%;
    padding: 3rem 2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    

`;


const ColumnLeft = styled.div`
    width:80%;
    display:grid;
    place-items:center;
    position:relative;

    img{
        width:80%;
        height:90%;
        object-fit:cover;
        border-radius:25px;
        
        h3{
            width:50%;
        }
    }
    @media screen and (max-width:500px){
        img{
            width:100%
        }
        h3{
            width:100%;
            text-align:center;
        }
    }
    
`;


const AboutSection = ({ image }) => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    })


    return <Section id='about'>
        <Container>
            <ColumnLeft data-aos='fade-down'>
                <img src={image} alt='home' />
                <h3>IEEE DYPIEMR STUDENT BRANCH INAUGURATION CEREMONY</h3>
            </ColumnLeft>

        </Container>
    </Section>
};

export default AboutSection;
