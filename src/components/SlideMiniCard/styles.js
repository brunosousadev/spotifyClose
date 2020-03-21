import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px 10px;
  flex-flow: column-wrap-reverse;
`;

export const SlideScroll = styled.ScrollView.attrs({
  showHorizontalScrollIndicator: false,
  horizontal: true,
})``;
