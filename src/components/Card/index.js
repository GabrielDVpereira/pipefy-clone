import React from "react";

import { Container, Label } from "./styles";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migração de servidor</p>
      <img
        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png"
        alt="avatar"
      />
    </Container>
  );
}

export default Card;
