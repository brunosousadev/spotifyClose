import React from 'react';

import {Container, SubContainer, Photo, Title} from './styles';

const MiniCard = ({item}) => {
  return (
    <Container>
      <Photo
        source={{
          uri: item.photo,
        }}
      />
      <SubContainer>
        <Title> {item.title} </Title>
      </SubContainer>
    </Container>
  );
};

export default MiniCard;
