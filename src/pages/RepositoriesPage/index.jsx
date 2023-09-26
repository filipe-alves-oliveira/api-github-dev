import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom'

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Loading, Container, Sidebar, Main } from "./styles";
import { getUser, getRepos, getLangsFrom } from "../../services/api";

function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login)
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));
      setLoading(false);
    };

    loadData();
  } , []);

  // const user = {
  //   login: "filipe-alves-oliveira",
  //   name: "Filipe Alves de Oliveira",
  //   avatar_url: "https://avatars.githubusercontent.com/u/84151293?v=4",
  //   followers: 6,
  //   following: 9,
  //   company: "Opah IT",
  //   blog: "https://github.com/filipe-alves-oliveira",
  //   location: "Cândido Mota - SP",
  // };

  // const repositories = [
  //   {
  //     id: "1",
  //     name: "Repo 1",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "JavaScript",
  //   },
  //   {
  //     id: "2",
  //     name: "Repo 2",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "Java",
  //   },
  //   {
  //     id: "3",
  //     name: "Repo 3",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "PHP",
  //   },
  //   {
  //     id: "4",
  //     name: "Repo 4",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "Ruby",
  //   },
  //   {
  //     id: "5",
  //     name: "Repo 5",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "JavaScript",
  //   },
  //   {
  //     id: "6",
  //     name: "Repo 6",
  //     description: "Descrição",
  //     html_url: "https://github.com/filipe-alves-oliveira",
  //     language: "Ruby",
  //   },
  // ];

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if(loading) {
    return <Loading>Carregando...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
      <button type='button'>
        <a href="http://localhost:3000/">Nova Pesquisa</a></button>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
