import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/84151293?v=4" />
        <Login>filipe-alves-oliveira</Login>
        <Name>Filipe Alves de Oliveira</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30 seguidores - 10 seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          Opah
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Cândido Mota - SP
        </Data>
        <Data>
          <MdLink size={20} /> &nbsp;
          <a href="https://opah.com.br">www.opah.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
