import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Menudata } from '../data/Menudata';
import { FaBars } from 'react-icons/fa'
import Ieeelogonav from '../images/herosection/IEEElogonav.png'
import Dropdown from './Dropdown';
import { FaTimes } from 'react-icons/fa';

import './eventTimeline.css'
const Nav = styled.nav`
   height : 80px;
   display: flex;
   justify-content:space-between;
   padding:1rem 3rem;
   z-index:100;
   position :fixed;
   width : 100%;
   background-color:#000;
   color:white;

   @media screen and (max-width:500px){
        padding:0;
        padding-right:1px;
   }
  
`;



const NavLink = css`
color : #fff;
display :flex;
align-items:center;
color:#78E038;
padding: 0 1.5rem;
height : 100%;
cursor:pointer;
text-decoration:none;
font-weight:500;
list-style:none;


`

const Logo = styled(Link)`
    ${NavLink}
    font-styled :italic;
    display :flex;
    justify-content:space-between;
    width:12%;
    font-size:clamp(1rem,2vh,10%);
    font-family: 'Roboto', sans-serif;
      
    `;


const CloseIcon = styled(FaTimes)`
    display:none;
@media screen and (max-width : 768px){
    display:flex;
    align-self:center;
    justify-self:center;
    margin-right:20px;
    &:after{
        content :'Menu';
        color:white;
    }

    
}
`;

const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width : 768px){
    display:flex;
    align-self:center;
    justify-self:center;
    margin-right:20px;
    &:after{
        content :'Menu';
        color:white;
    }

    
}

`

const NavMenu = styled.div`
  display : flex;
  align-items:center;
  margin-right :-48px;

  @media screen and (max-width : 768px){
      display :none;
      height:40px;
      width:4px;
      background:white;
      cursor:pointer;
      position:absolute;
      top:0;
      right:0;
      transform:translate(-50%,25%)
  }
  @media screen and (max-width:500px){
      margin-right:0;
  }

`

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }



    return (
        <header className='navhead'>
            <Nav>
                <Logo to='/' >
                    <img src={Ieeelogonav} alt='logo' />
                </Logo>
                {
                    isOpen ?
                        <CloseIcon onClick={toggle} />
                        :
                        <MenuBars onClick={toggle} />
                }
                {/* <MenuBars onClick={toggle} textAnchor="Menu" /> */}

                <NavMenu>
                    {
                        Menudata.map((item, index) => (
                            <NavMenuLinks to={item.link} key={index} href={item.id}>
                                {item.title}
                            </NavMenuLinks>
                        ))
                    }
                </NavMenu>
                <div style={{ position: 'absolute', top: '250px' }}>
                    <Dropdown isOpen={isOpen} toggle={toggle} />
                </div>

            </Nav>


        </header>


    );
};

export default Navbar;
