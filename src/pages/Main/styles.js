import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  background: #191920;
`;

export const Box = styled.View`
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Image = styled.Image.attrs({
  // resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 21px;
  margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  background: #7159c1;
  border-radius: 4px;

  flex-direction: row;
`;

export const TextButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const AddCart = styled.View`
  background: rgba(0, 0, 0, 0.1);
  width: 53px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NumberItensCart = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
