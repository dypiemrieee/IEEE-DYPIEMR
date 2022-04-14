import React from 'react';
import styled from 'styled-components';
import { Menudata } from '../data/Menudata';
import { Link } from 'react-router-dom';


const DropdownContainer = styled.div`
    position:fixed;
    z-index:${({ isOpen }) => (isOpen ? '999' : -10)};
    width:50%;
    height:60%;
    padding:1rem;
    background:#166088;
    display:grid;
    align-items:space-around;
    ${'' /* top:-10%; */}
    right:${({ isOpen }) => (isOpen ? ' 0' : '-250px')};
    transition:0.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? ' 1' : '0')};
    top:80px;

`



const DropdownMenu = styled.div`
    display:grid;
    grid-template-column:1fr;
    text-align:center;
    margin-bottom:3rem;

    @media screen and (max-width:480px){
        grid-template-row:repeat(4,60px);
        
    }

`;
const DropdownLink = styled(Link)`
    display:flex;
    color:#fff;
    align-items:center;
    justify-content:center;
    font-size:1rem;
    margin: 1rem 0;
    text-decoration:none;
    list-style:none;
    color:#fff;
    cursor:pointer;
    transition:0.2s ease-in-out;
   
    &:hover{
        color:#000d1a
    }

`;






const Dropdown = ({ isOpen, toggle }) => {
    return (<DropdownContainer isOpen={isOpen} onClick={toggle}>


        <DropdownMenu>
            {Menudata.map((item, index) => (
                <DropdownLink to={item.link} key={index}>
                    {
                        item.title
                    }
                </DropdownLink>
            ))}
        </DropdownMenu>

    </DropdownContainer>);
};

export default Dropdown;
