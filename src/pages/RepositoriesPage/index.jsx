import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Container, Sidebar, Main } from "./styles";

function RepositoriesPage() {
  const user = {
    login: "filipe-alves-oliveira",
    name: "Filipe Alves de Oliveira",
    avatar_url: "https://avatars.githubusercontent.com/u/84151293?v=4",
    followers: 6,
    following: 9,
    company: "Opah IT",
    blog: "https://github.com/filipe-alves-oliveira",
    location: "Cândido Mota - SP",
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
