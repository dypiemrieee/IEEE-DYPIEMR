import React from 'react'
import styled from 'styled-components'

const SliderSection = ({ glimpse }) => {
    const GlimpseImage = styled.div`
        margin:1rem 2rem;
        width:50vw;
        height:30vh;
       box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
        -webkit-box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
        -moz-box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
      
       
       img{
           width:15vw;
           height:100%;
           object-fit:cover;
           border-radius:25px;       

              }

              @media screen and (max-width:500px){
                  margin:1rem;
     img{ 
        width:50vw;
    }
}
   
       
  `


    return (
        <div style={{ width: '60vw', height: '100%', display: 'flex', alignItems: 'center', overflowX: 'scroll' }} >
            {
                glimpse.map((e, i) => {
                    return (
                        <GlimpseImage key={i}>
                            <img src={e.glimpse} alt='img' />
                        </GlimpseImage>
                    )
                })
            }
        </div>
    )
}

export default SliderSection