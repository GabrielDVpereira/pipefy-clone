import React from "react";
import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Container } from "./styles";

function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd color="#fff" size={24} />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;
