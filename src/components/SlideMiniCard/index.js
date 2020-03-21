import React, {useState, useEffect} from 'react';

import {Container} from './styles';

import MiniCard from '../MiniCard';

import Mock from '../../services/mock';

const SlideMiniCard = () => {
  const [miniSlides, setMiniSlides] = useState([]);

  const onFetchMiniSlides = async () => {
    const response = await Mock.fetchMiniSides();
    setMiniSlides(response);
  };

  useEffect(() => {
    onFetchMiniSlides();
  }, []);

  return (
    <Container>
      {miniSlides &&
        miniSlides.map((item, index) => <MiniCard key={index} item={item} />)}
    </Container>
  );
};

export default SlideMiniCard;
