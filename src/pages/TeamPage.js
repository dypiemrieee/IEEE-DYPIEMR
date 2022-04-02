import React, { useState, useEffect } from 'react';
import BoardSection from '../component/BoardSection';
import styled from 'styled-components';
import HashLoader from "react-spinners/HashLoader";


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

const TeamPage = () => {

    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 1000)
    }, [])

    return <>
        {
            loading ? <LoadingScreen>
                <HashLoader color={'#19FC30'}
                    loading={loading}
                    size={150} />
            </LoadingScreen> :
                <>
                    <div style={{
                        position: 'relative',
                        top: "0",
                        color: '#19FC30',
                        height: '100vh',
                        width: '100vw',
                        backgroundColor: "#000"

                    }}>
                        <h2 data-aos='fade-up'
                            style={{
                                height: '100%',
                                display: "grid",
                                placeItems: 'center',
                                fontSize: '5rem',
                            }}>Our Team</h2>
                    </div>
                    <BoardSection />
                </>
        }
    </>;
};

export default TeamPage;
