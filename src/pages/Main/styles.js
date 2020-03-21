import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
})``;

export const ContainerConfiguration = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  padding: 20px;
`;

export const Greetings = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0px 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
