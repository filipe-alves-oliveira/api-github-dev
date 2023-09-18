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

  // const repositories = [
  //   {name: "Repo 1", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "JavaScript"},
  //   {name: "Repo 2", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "Java"},
  //   {name: "Repo 3", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "PHP"},
  //   {name: "Repo 4", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "Ruby"},
  //   {name: "Repo 5", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "JavaScript"},
  //   {name: "Repo 6", desciption: "Descrição", html_url: "https://github.com/filipe-alves-oliveira", language: "React"},
  // ];

  // Calculo dos filters
  const languages = [
    { name: "JavaScript", count: 5, color: "#FCC419" },
    { name: "Java", count: 2, color: "#F83600" },
    { name: "PHP", count: 3, color: "#7E5CEF" },
    { name: "Ruby", count: 4, color: "#FE5895" },
  ]

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
