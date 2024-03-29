import styled from "styled-components";

export const Card = styled.div`
  height: 25vh;
  width: 20vw;
  margin: 0 10px 0 10px;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.9;
  }

  h3 {
    position: relative;
    bottom: 30%;
    color: white;
  }
  p {
    background-color: black;
    color: #ffa634;
    width: 100%;
    position: relative;
    border-radius: 0 10px 0 10px;
    bottom: 30%;
    padding: 2px;
  }

  @media (max-width: 600px) {
    width: 70%;
    height: 50vh;
    margin-top: 1rem;
  }

  p {
    width: 86%;
  }
`;
