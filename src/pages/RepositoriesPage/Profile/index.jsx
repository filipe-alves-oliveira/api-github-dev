import React from 'react'

import { Container, Header, Avatar, Login, Name } from './styles'

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/84151293?v=4" />
          <Login>filipe-alves-oliveira</Login>
          <Name>Filipe Alves de Oliveira</Name>
      </Header>
    </Container>
  )
}

export default Profile