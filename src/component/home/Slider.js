import React from 'react'
import styled from 'styled-components'

const Slider = ({ event }) => {
    const GlimpseImage = styled.div`
    margin:1rem 2rem;
    width:60vw;
    height:40vh;
   box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
    -webkit-box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
    -moz-box-shadow: 10px 8px 12px 0px rgba(24,37,16,0.75);
    cursor:pointer;
    
   
   img{
       width:15vw;
       height:100%;
       object-fit:cover;
       border-radius:15px;       

    }

 @media screen and (max-width:500px){
              margin:1rem;
    img{ 
    width:50vw;
}
}
`
    return (
        <div style={{ width: '80vw', height: '100%', display: 'flex', alignItems: 'center', overflowX: 'scroll', margin: '4rem 0' }} >
            {
                event.map((e, i) => {
                    return (
                        <GlimpseImage key={i} id={e.id}>
                            <img src={e.image} alt='img' />
                        </GlimpseImage>
                    )
                })
            }
        </div>)
}

export default Slider