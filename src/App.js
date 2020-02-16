import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from './actions';
import Header from './components/Header';
import ShopWindow from './components/ShopWindow';
import GoodsPage from './components/GoodsPage';
import Cart from './components/Cart';
import GOODS from './data';
import './index.css';

const mapStateToProps = (state) => {
  const props = {
    cart: state.cart,
    isCartOpen: state.cartWindow,
    slider: state.slider,
  };
  return props;
}

const actionCreators = {
  addItemToCart: actions.addItemToCart,
  removeItemFromCart: actions.removeItemFromCart,
  addItemQuantity: actions.addItemQuantity,
  turnDownItemQuantity: actions.turnDownItemQuantity,
  openCart: actions.openCart,
  closeCart: actions.closeCart,
  fillSlider: actions.fillSlider,
  shiftSliderLeft: actions.shiftSliderLeft,
  shiftSliderRight: actions.shiftSliderRight,
}


class App extends React.Component {

  static defaultProps = {
    goods: GOODS,
  }

  componentDidMount() {
    const { fillSlider, goods } = this.props;
    fillSlider(goods);
  }

  handleAddToCart = (id) => (e) => {
    e.preventDefault();
    const { addItemToCart, addItemQuantity, goods, cart, changeSum} = this.props;
    const item = goods.filter( (item) => item.id === id )[0];
    const isItemInCart = cart.filter( (item) => item.id === id ).length > 0;
    if (isItemInCart) addItemQuantity(id);
    else addItemToCart(item);
  }

  handleAddItemQnt = (id) => (e) => {
    e.preventDefault();
    const { addItemQuantity, changeSum } = this.props;
    addItemQuantity(id);
  }

  handleTurnDownItemQnt = (id) => (e) => {
    e.preventDefault();
    const { turnDownItemQuantity, changeSum } = this.props;
    turnDownItemQuantity(id);
  }

  handleCartClick = (e) => {
    e.preventDefault();
    const {isCartOpen, openCart, closeCart} = this.props;
    if (isCartOpen) closeCart();
    else openCart(); 
  }

  handleSliderBtn = (direction) => (e) => {
    e.preventDefault();
    const {shiftSliderLeft, shiftSliderRight} = this.props;
    switch(direction) {
      case 'left':
        return shiftSliderLeft();
      case 'right':
        return shiftSliderRight();
    }
  }

  handlePrintClick = (e) => {
    e.preventDefault();
    window.print();
  }

  render() {
    const {slider, goods, cart, isCartOpen, cartSum} = this.props;
    const cartClasses = classnames({
      'cart': true,
      'cart-show': isCartOpen,
    });
    const appClasses = classnames({
      'shadow': isCartOpen,
    });
    return (
      <>
        <div className="App">
          <Header handleCartClick={this.handleCartClick} />
          <Switch>
            <Route exact path="/" render={(props) => <ShopWindow sliderItems={slider} 
              handleSliderBtn={this.handleSliderBtn} {...props} />} />
            <Route path="/goods/:id" render={(props) => <GoodsPage goods={goods} 
              handleAddToCart={this.handleAddToCart} {...props} />} />
          </Switch>
          <Cart cart={cart} cartClasses={cartClasses} handleAddItemQnt={this.handleAddItemQnt} 
            handlePrintClick={this.handlePrintClick} handleCartClick={this.handleCartClick}
            handleTurnDownItemQnt={this.handleTurnDownItemQnt} />
        </div>
        <div className={appClasses} onClick={this.handleCartClick}></div>
      </>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(App);

