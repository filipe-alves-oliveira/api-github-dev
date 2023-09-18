import React from "react";
import PropTypes from "prop-types";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following} seguidores - {user.followers} seguindo
        </Data>
        <Data>
          <MdWork size={20} />
          {user.company} - &nbsp;
          <a href="https://opah.com.br">https://opah.com.br/ </a>
        </Data>
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
        <Data>
          <MdLink size={20} /> &nbsp;
          <a href={user.blog}>{user.blog}</a>
        </Data>
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
