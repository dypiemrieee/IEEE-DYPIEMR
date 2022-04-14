import React from 'react';
import styled from 'styled-components';
import { Menudata } from '../data/Menudata';
import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const DropdownContainer = styled.div`
    position:fixed;
    z-index:${({ isOpen }) => (isOpen ? '999' : -10)};
    width:50%;
    height:50%;
    padding:1rem;
    background:#19338F;
    display:grid;
    align-items:center;
    top:-10%;
    right:0;
    transition:0.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? ' 1' : '0')};
    top:${({ isOpen }) => (isOpen ? ' 0' : '-100')};

`


const Icon = styled.div`
    position:absolute;
    top:2rem;
    right:1.5rem;
    ${'' /* background:white; */}
    font-size:2rem;
    cursor:pointer;
    outline:none;
    color:white;
`;
const CloseIcon = styled(FaTimes)`
    color:#fff;
    font-size:1.5rem;
`;
const DropdownWrapper = styled.div`
    margin-top:4rem;
`;
const DropdownMenu = styled.div`
    display:grid;
    grid-template-column:1fr;
    text-align:center;
    margin-bottom:4rem;

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
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {Menudata.map((item, index) => (
                    <DropdownLink to={item.link} key={index}>
                        {
                            item.title
                        }
                    </DropdownLink>
                ))}
            </DropdownMenu>
           
        </DropdownWrapper>
    </DropdownContainer>);
};

export default Dropdown;
