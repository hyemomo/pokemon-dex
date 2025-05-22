import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import MOCK_DATA from '../mock/mock';
import styled from 'styled-components';
const pokemons = MOCK_DATA 

export const Container = styled.div`
background-color: rgb(255, 228, 248);
width: 100%;
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Type = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 1rem;
  max-width: 400px;
  text-align: center;
  line-height: 1.5;
  color: #333;
`;
const Button = styled.button`
margin-top:30px ;
background-color: #00805c;
color:white;
border:none;
padding: 10px 20px;
border-radius:12px;
font-size: 14px;
`
const Details = () => {
    const param = useParams();
    const details = pokemons.find((item) => item.id === parseInt(param.id));
// console.log(details.description)
// console.log(param.id)
const navigate = useNavigate()

  return (
    <Container>
        <Image src={details.img_url}></Image>
        <Name>{details.korean_name}</Name>
        <Type>{details.types}</Type>
        <Desc>{details.description}</Desc>
        <Button onClick={()=>{navigate('/dex')}}>뒤로가기</Button>
    </Container>
      
   
  )
}

export default Details
