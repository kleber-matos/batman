import styled from "styled-components";

export const Conatiner = styled.section`
  /* border: solid; */
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const About = styled.section`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60vw;
  max-width: 600px;
  height: 35vh;

  figure {
    display: flex;
    justify-content: space-between;
    width: 60vw;
    max-width: 290px;
    color: white;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 100vh;
  }
`;

export const Description = styled.section`
  /* border: solid blue 4px; */
  color: white;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }
  button {
    background: #ffa634;
    width: 35%;
    border: none;
    border-radius: 3px;
    font-weight: bolder;
    padding: 5px;
  }
  @media (max-width: 600px) {
    height: 30vh;
  }
`;

export const Films = styled.section`
  /* border: solid; */
  display: flex;
  justify-content: space-between;
  width: 60vw;
  max-width: 600px;

  @media (max-width: 600px) {
    width: 90%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
`;

export const Categoria = styled.h3`
  background-color: #ffa634;
  width: 60%;
  border-radius: 0 10px 0 10px;
  padding: 3px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
