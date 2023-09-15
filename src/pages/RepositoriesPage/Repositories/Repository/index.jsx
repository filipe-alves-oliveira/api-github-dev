import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return (
      <Container color="blue">
        <Name>Repository Name</Name>
        <Description>Repository Description</Description>
        <Footer color="red">
            <Lang>Repository Lang</Lang>
            <Link href="https://github.com/filipe-alves-oliveira" target="_blank">Ver</Link>
        </Footer>
      </Container>
  );
}

export default Repository;
