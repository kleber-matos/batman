import React from "react";
import * as S from "./styles";
import { AiFillBell } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <S.NavBar>
      <h2>Filmes</h2>

      <S.Nav>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Minha lista</a>
          </li>
          <li>
            <a href="">
              <AiFillBell />
            </a>
          </li>
          <li>
            <a href="">
              <FaUser />
            </a>
          </li>
        </ul>
      </S.Nav>
    </S.NavBar>
  );
}
