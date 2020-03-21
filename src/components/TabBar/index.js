import React, {useState} from 'react';
import {Container, SubContainer, GroupAction, ActionName} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const TabBar = () => {
  const [iconConfigure] = useState({color: '#fff', size: 22});
  return (
    <Container>
      <SubContainer>
        <GroupAction>
          <Icon name="home" {...iconConfigure} />
          <ActionName> Início </ActionName>
        </GroupAction>
        <GroupAction>
          <Icon name="search" {...iconConfigure} />
          <ActionName> Buscar </ActionName>
        </GroupAction>
        <GroupAction>
          <Icon name="book" {...iconConfigure} />
          <ActionName> Biblioteca </ActionName>
        </GroupAction>
      </SubContainer>
    </Container>
  );
};

export default TabBar;
