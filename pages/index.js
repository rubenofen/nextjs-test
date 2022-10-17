import Head from "next/head";
import styled from "styled-components";

const Splash = () => (
  <Wrapper>
    <Title>Purple</Title>
  </Wrapper>
);

export default Splash;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;
