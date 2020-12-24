import React from "react";
import styled from "styled-components";
import { landing } from "../../assets";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: auto; */
`;

const ImageContainer = styled.div`
  width: 900px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Main = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={landing} alt="" />
      </ImageContainer>
    </Container>
  );
};

export default Main;
