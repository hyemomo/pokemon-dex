import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

 const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;
const Button=styled.button`
  border-radius: 14px;
  padding: 10px 20px;
  font-size: 24px;
  cursor: pointer;
`
 const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
`;

 const StartButton = styled.button`
  background-color: #ff1c1c;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;
const Home = () => {
    const navigate = useNavigate()
  return (
    <Container>

      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/500px-Pokebola-pokeball-png-0.png"></Image>
      <Button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </Button>
    </Container>
  );
}

export default Home
