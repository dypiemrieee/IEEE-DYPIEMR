import React from 'react'
import styled from 'styled-components';

const FormElemen = styled.div`
margin:1rem 0;
  width: 100%;
  label{
    display: inline-block;
  font-size: 1rem;
  margin-bottom: 6px;
  color: #000;
  font-weight:500;
  };
  input{
  border-radius:10px;

  display: block;
  padding-left: 10px;
  outline: none;
  height:40px;
  width: 100%;
  background-color:#DCDCDD;
  border: 3px solid white;
  transition:all 0.4s ease-in-out ;
  &:focus{
      border:1px solid  #19338F;
      padding:1rem;

  }
  }
  textarea{
  border-radius:10px;
  padding:5px 10px;
  display: block;
  outline: none;
  height:100%;
  width: 100%;
  background-color:#DCDCDD;
  border: 3px solid white;
  transition:all 0.4s ease-in-out ;

  &:focus{
      border:1px solid  #19338F;
      padding:1rem;
  }
  }
  
  @media(max-width:450px){
    width:80%;
    padding:10px;
    height:100%;
    input{
        padding:10px;
        width:100%;
        height:20%
    }
    textarea{
        padding:10px;
        width:100%;
        height:20%
    }
  }
`;

const FormElement = ({ inputT, lname, emogi }) => {

    return (
        <FormElemen>
            <label>{lname}</label>

            {
                inputT ? <textarea rows="8" cols="10" placeholder={emogi + lname} /> : <input className='form-input'
                    type='text'
                    name='username'
                    placeholder={emogi + ' Enter Your ' + lname}

                />
            }

        </FormElemen>
    )
}

export default FormElement