import React from "react";

import { Container, Selector, Cleaner } from "./styles";

function Filter() {
  const langs = [
    { name: "JavaScript", count: 5, color: "#FCC419" },
    { name: "Java", count: 2, color: "#F83600" },
    { name: "PHP", count: 3, color: "#7E5CEF" },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
      <Container>
        {selectors}
        <Cleaner>
            Limpar
        </Cleaner>
      </Container>
  );
}

export default Filter;
