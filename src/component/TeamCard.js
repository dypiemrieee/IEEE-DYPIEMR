import React from 'react'
import styled from 'styled-components';



const TeamCards = styled.div`
    width:40%;
    height:60%;
    margin:1rem 1.5rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    
   .cardhead{
       font-size:20px;
       margin:1.5rem;
   }
   @media screen and (max-width:450px){
         width:100%;
         overflow-y:scroll;
            height:80%;
   }
`;
const Card = styled.div`
    width:90%;
    height:90%;
    padding:1rem;
    background-color:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: #FFFFFF;
box-shadow: -1px 4px 26px -6px rgba(0, 0, 0, 0.25);
border-radius: 20px;
@media screen and (max-width:450px){
    width:100%;
    padding:0;
}
`;

const Cardcontent = styled.div`
   margin:0.8rem 0.5rem;
   width: ${({ isCore }) => (isCore ? "45%" : "40%")};
   height:100%;
   display:flex;
   position:relative;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   text-align:center;
  h1{
     font-size:20px;
     font-weight:600;
  }
  p{
      color:#292EC9;
      font-size:15px;
      font-weight: bold;

  }
  @media screen and (max-width:450px){
    width:100%;
    padding:0;
}
`;

const CardImg = styled.div`
   width:120px;
   height:120px;
   img{
       height:80%;
       width:100%;
       border-radius:50%;
       object-fit:cover;
   }
   @media screen and (max-width:450px){
    width:50%;
    height:50%;
    padding:0;
    img{
        border-radius:25px;
        object-fit:cover;
    }
}
`;

const TeamCard = ({ heading, team, name, position, image },) => {
    return <>
        <TeamCards>
            <h1 className='cardhead'>{heading}</h1>
            <Card>
                {
                    (name && position && image) ? <Cardcontent>
                        <CardImg>
                            <img src={image} alt='img' style={{ objectFit: 'cover', width: '100%' }} />
                        </CardImg>
                        <h1>{name}</h1>
                        <p>{position}</p>
                    </Cardcontent> : null
                }



                <div className='divsub' style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: '100%', height: '100%' }}>

                    {team.map((member, index) => {
                        return (
                            <Cardcontent key={index}>

                                <CardImg>
                                    <img src={member.image} alt='' />
                                </CardImg>
                                <h1>{member.name}</h1>
                            </Cardcontent>
                        )
                    })}
                </div>



            </Card>







        </TeamCards>
    </>


}

export default TeamCard