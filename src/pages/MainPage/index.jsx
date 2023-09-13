import React from "react";

import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  return (
    <div>
      <Container>
        <Logo src={githubLogo} alt="API github" />
        <Title>API Github</Title>
        <Form>
          <Input placeholder="Digite o nome do usuário" />
          <Button>
            <MdSearch size={40} style={{color:'white'}}/>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MainPage;
