import React, { useState } from "react";

import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  const [login, setLogin] = useState();
  // setLogin é a função setter da login variável de estado, desestruturação.
  return (
    <div>
      <Container>
        <Logo src={githubLogo} alt="API github" />
        <Title>API Github</Title>
        <Form>
          <Input
            placeholder="Digite o nome do usuário"
            value={login}
            onChange={(event) => setLogin(event.target.value)} 
            // onChange={(e) => console.log(e)} manipula o value do target
          />
          <Button to={`/${login}/repositories`}>
            <MdSearch size={40} style={{ color: "white" }} />
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default MainPage;
