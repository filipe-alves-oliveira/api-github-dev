import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Container, Sidebar, Main } from "./styles";
import { getLangsFrom } from "../../services/api";

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

  const repositories = [
    {
      id: "1",
      name: "Repo 1",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo 2",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "Java",
    },
    {
      id: "3",
      name: "Repo 3",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "PHP",
    },
    {
      id: "4",
      name: "Repo 4",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "Ruby",
    },
    {
      id: "5",
      name: "Repo 5",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "JavaScript",
    },
    {
      id: "6",
      name: "Repo 6",
      desciption: "Descrição",
      html_url: "https://github.com/filipe-alves-oliveira",
      language: "Ruby",
    },
  ];

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
