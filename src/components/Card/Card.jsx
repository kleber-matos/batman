import React from "react";
import * as S from "./styles";

export default function Card({ imagem, title }) {
  return (
    <S.Card>
      <img src={imagem} alt="" />
      <p>Ação/Suspense</p>
      <h3>{title}</h3>
    </S.Card>
  );
}
