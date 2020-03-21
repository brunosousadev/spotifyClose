import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 3px 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const SlideScroll = styled.ScrollView.attrs({
  showHorizontalScrollIndicator: false,
  horizontal: true,
})``;
