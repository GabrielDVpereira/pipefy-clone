import React, { useState } from "react";
import List from "../List";
import { loadLists } from "../../services/api";
import BoardContext from "./context";
import produce from "immer";

import { Container } from "./styles";

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    console.log(from, to);
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.id} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
