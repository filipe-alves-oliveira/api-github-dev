import React from "react";
import PropTypes from "prop-types";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository({ repository }) {
  return (
    <Container color="blue">
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color="red">
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repository;
