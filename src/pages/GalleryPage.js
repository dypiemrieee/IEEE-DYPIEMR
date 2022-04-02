import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../firebase/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import HashLoader from "react-spinners/HashLoader";

const GalleryPageDiv = styled.div`
    height:100%;
    width:100vw;
    padding:5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        padding:3rem;
        font-size:50px;
    }
    .grid{
        justify-content:center;
    align-items:center;
        display:flex;
        flex-flow:row wrap;
        padding:1rem;
    }
    
    @media screen and (max-width:450px){
        padding:3rem;
    }

`

const LoadingScreen = styled.div`
  
    width:100vw;
    height:100vh;
    background-color:#000;
    position:absolute;
    z-index:1000;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
   `;

const ImagesGallery = styled.div`
    transition:all 0.6s  linear;
    width:30%;
    height:30%;
    margin:10px;
    filter:brightness(90%);
        img{
            transition:all 0.6s  linear;

        width:100%;
        object-fit:cover;
        height:100%
    }
    &:hover{
        filter:brightness(120%);
        posistion:relative;

        img{
            object-fit:contain;
        }
    }
    @media screen and (max-width:450px){
        width:100%;
        height:80%;
    }
`

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [loading, setloading] = useState(false);

    const eventsCollectionRef = collection(db, 'gallery');
    const q = query(eventsCollectionRef, orderBy("date", "desc"))



    useEffect(() => {


        const getImages = async () => {
            const data = await getDocs(q);
            setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        }

        getImages();
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 600)
        return () => {
            setImages({});
        };
    }, [])
    return (<>

        {
            loading ? <LoadingScreen>
                <HashLoader color={'#19FC30'}
                    loading={loading}
                    size={150} />
            </LoadingScreen> :

                <GalleryPageDiv>

                    <h1>Gallery</h1>
                    <div className='grid'>
                        {
                            images.map((item, index) => {
                                return (
                                    <ImagesGallery key={index}>

                                        <img src={item.image} alt='galimage' />


                                    </ImagesGallery>
                                )
                            })
                        }

                    </div>

                </GalleryPageDiv>


        } </>
    )
}

export default GalleryPage