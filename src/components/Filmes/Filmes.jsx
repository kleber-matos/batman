import React from "react";
import estrelas from "../../assets/estrelas.svg";
import * as S from "./styles";
import Card from "../Card/Card";
import filme1 from "../../assets/filme1.png";
import filme2 from "../../assets/filme2.png";
import filme3 from "../../assets/filme3.png";

export default function Filmes() {
  return (
    <>
      <S.Conatiner>
        <S.About>
          <div>
            <S.Categoria>Ação/Aventura</S.Categoria>
            <figure>
              <img src={estrelas} alt="avaliação" />
              <figcaption>🕒 1h 57m</figcaption>
            </figure>
          </div>
          <S.Description>
            <h2>Batman</h2>
            <p>
              Gotham City enfrenta uma nova ameaça, e Bruce Wayne assume o papel
              do Cavaleiro das Trevas para deter uma organização criminosa. Em
              meio a seus próprios demônios internos, Wayne luta para salvar a
              cidade da iminente escuridão eterna.
            </p>
            <button>Assistir agora</button>
          </S.Description>
        </S.About>

        <S.Films>
          <Card imagem={filme1} title={"Shang-Chi"} />
          <Card imagem={filme2} title={"Wish Dagron"} />
          <Card imagem={filme3} title={"Spider-Man"} />
        </S.Films>
      </S.Conatiner>
    </>
  );
}
