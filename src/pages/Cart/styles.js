import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 10px;
`;

export const ProductList = styled.View`
  background: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;

export const Product = styled.View`
  padding: 10px 0;

  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetail = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductRemoveButton = styled.TouchableOpacity``;

export const Actions = styled.View`
  flex-direction: row;
  background: #eee;
  /* justify-content: center; */
  align-items: center;
  padding: 0 10px;
`;

export const ActionControll = styled.View`
  flex: 1;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

export const AmountTextInput = styled.TextInput`
  background: #fff;
  color: #000;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 30px;
  padding: 0 20px;
  min-width: 50px;
`;

export const Amount = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const AmountTotalContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AmountLable = styled.Text`
  padding-top: 15px;
  color: #ccc;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const AmountValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  margin-top: 10px;
  background: #7159c1;
  height: 46px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1.8px;
`;

export const EmptyView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyViewText = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;
