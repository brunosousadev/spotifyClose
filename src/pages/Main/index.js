import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  ContainerScrollView,
  ContainerConfiguration,
  Greetings,
  Title,
} from './styles';

import SlideCard from '../../components/SlideCard';
import SlideMiniCard from '../../components/SlideMiniCard';

import Mock from '../../services/mock';

const Main = () => {
  const [slides, setSlides] = useState([]);

  const onFetchSlides = async () => {
    const response = await Mock.fetchSides();
    setSlides(response);
  };

  useEffect(() => {
    onFetchSlides();
  }, []);

  return (
    <Container>
      <ContainerConfiguration>
        <Icon name={'ios-cog'} size={25} color={'#fff'} />
      </ContainerConfiguration>
      <Greetings>
        <Title>Boa tarde</Title>
      </Greetings>
      <ContainerScrollView>
        <SlideMiniCard />
        {slides &&
          slides.map((slide, index) => <SlideCard key={index} slide={slide} />)}
      </ContainerScrollView>
    </Container>
  );
};

export default Main;
