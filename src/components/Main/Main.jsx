import React from "react";
import * as S from "./styles";
import NavBar from "../NavBar/NavBar";
import Filmes from "../Filmes/Filmes";

export default function Main() {
  return (
    <S.Main>
      <NavBar />
      <Filmes />
    </S.Main>
  );
}
