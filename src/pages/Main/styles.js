import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
})``;
