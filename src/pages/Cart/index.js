import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProductList,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetail,
  ProductTitle,
  ProductPrice,
  ProductRemoveButton,
  Actions,
  ActionControll,
  Amount,
  AmountTextInput,
  AmountTotalContainer,
  AmountLable,
  AmountValue,
  FinishButton,
  FinishButtonText,
  EmptyView,
  EmptyViewText,
} from './styles';

import {formatPrice} from '../../util/format';

import {
  updateAmountRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subtotal: formatPrice(p.price * p.amount),
    }))
  );
  const total = formatPrice(
    useSelector(state =>
      state.cart.reduce((summed, product) => {
        summed += product.price * product.amount;

        return summed;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductList>
        {cart.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage
                source={{
                  uri: product.image,
                }}
              />
              <ProductDetail>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetail>
              <ProductRemoveButton
                onPress={() => dispatch(removeFromCart(product.id))}>
                <Icons name="delete-forever" size={24} color="#7159c1" />
              </ProductRemoveButton>
            </ProductInfo>
            <Actions>
              <ActionControll>
                <TouchableOpacity onPress={() => decrement(product)}>
                  <Icons
                    name="remove-circle-outline"
                    size={24}
                    color="#7159c1"
                  />
                </TouchableOpacity>
                <AmountTextInput
                  defaultValue={String(product.amount)}
                  editable={false}
                />
                <TouchableOpacity onPress={() => increment(product)}>
                  <Icons name="add-circle-outline" size={24} color="#7159c1" />
                </TouchableOpacity>
              </ActionControll>
              <Amount>{product.subtotal}</Amount>
            </Actions>
          </Product>
        ))}

        {cart.length ? (
          <>
            <AmountTotalContainer>
              <AmountLable>TOTAL</AmountLable>
              <AmountValue>{total}</AmountValue>
            </AmountTotalContainer>
            <FinishButton>
              <FinishButtonText>FINALIZAR</FinishButtonText>
            </FinishButton>
          </>
        ) : (
          <EmptyView>
            <EmptyViewText>Carrinho vazio</EmptyViewText>
          </EmptyView>
        )}
      </ProductList>
    </Container>
  );
}
