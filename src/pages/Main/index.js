/* eslint-disable react/prop-types */
import React from 'react';
import {FlatList} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {formatPrice} from '../../util/format';

import {
  Container,
  Box,
  Image,
  Title,
  Price,
  Button,
  AddCart,
  NumberItensCart,
  TextButton,
  Span,
} from './styles';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: null,
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products,
      id: null,
    });
  }

  handleNavigate = id => {
    this.setState({id});

    const {addToRequestCart} = this.props;
    addToRequestCart(id);
  };

  render() {
    const {products, id} = this.state;
    const {amount, productLoaded} = this.props;

    if (!products) {
      return (
        <Container>
          <Span>Nenhum produto encontrado.</Span>
        </Container>
      );
    }

    return (
      <Container>
        <FlatList
          data={products}
          extraData={[amount, id, productLoaded]}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Box>
              <Image source={{uri: item.image}} />
              <Title>{item.title}</Title>
              <Price>{item.priceFormatted}</Price>
              <Button onPress={() => this.handleNavigate(item.id)}>
                <AddCart>
                  <Icon name="add-shopping-cart" size={16} color="#FFF" />
                  <NumberItensCart>{amount[item.id] || 0}</NumberItensCart>
                </AddCart>
                <TextButton>
                  <Span>Adicionar</Span>
                </TextButton>
              </Button>
            </Box>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
  productLoaded: state.cart.reduce((productLoaded, product) => {
    productLoaded[product.id] = product.loaded;

    return productLoaded;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
