import React, { useEffect } from "react";
import styled from "styled-components";
import { landing } from "../../assets";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 900px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  vertical-align: bottom;
`;
const Download = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.4rem;
  // max-width: 900px;
  width: 100%;
  height: 80px;
  background-color: #4a64f5;
  color: #fff;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  vertical-align: top;
`;

const Main = () => {
  const os = window.navigator.userAgent.toLowerCase();

  const buttonLink = () => {
    if (os.indexOf("windows") >= 0) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.app.lawdians"
      );
    } else if (os.indexOf("macintosh") >= 0) {
      window.open(
        "https://apps.apple.com/kr/app/%EB%A1%9C%EB%94%94%EC%96%B8%EC%A6%88/id1546796443"
      );
    } else if (os.indexOf("iphone") >= 0) {
      window.open(
        "https://apps.apple.com/kr/app/%EB%A1%9C%EB%94%94%EC%96%B8%EC%A6%88/id1546796443"
      );
    } else if (os.indexOf("android") >= 0) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.app.lawdians"
      );
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={landing} alt="로디언즈 앱 출시" />
        <Download onClick={buttonLink}>앱 다운로드</Download>
      </ImageContainer>
    </Container>
  );
};

export default Main;
