import React from 'react';


const CartItem = (props) => {
  const { handleAddItemQnt, handleTurnDownItemQnt, item } = props;
  const { id, quantity, price, name } = item; 
  const totalPrice = quantity*price;
  return (
    <div className="cart-item">
      <div className="cart-item-name">{name}</div>
      <div className="cart-item-quantity">
        <div className="cart-item-btn add-btn" onClick={handleAddItemQnt(id)}>+</div>
        <div className="cart-item-quantity-value">{quantity}</div>
        <div className="cart-item-btn turn-down-btn" onClick={handleTurnDownItemQnt(id)}>-</div>
      </div>
      <div className="cart-item-price">{totalPrice} руб.</div>
    </div>
  );
}

const Cart = (props) => {
  const {cart, cartClasses, handleAddItemQnt,
     handleTurnDownItemQnt, handleCartClick, handlePrintClick} = props;
  return (
    <div className={cartClasses}>
      <div className="cart-header">
        <div className="cart-header-title">Корзина</div>
        <div className="cart-header-close" onClick={handleCartClick}>закрыть</div>
      </div>
      <div className="cart-items">
        {cart.length > 0 ? cart.map( (item) => <CartItem key={item.id} item={item} 
          handleAddItemQnt={handleAddItemQnt} handleTurnDownItemQnt={handleTurnDownItemQnt} /> ): 'Корзина пуста'}
      </div>
      {cart.length > 0 ? 
        <>
          <div className="cart-down-line"></div>
          <div className="cart-total-sum"><span>Сумма:</span> <CartSum cart={cart} />  руб.</div>
          <div className="cart-print-btn" onClick={handlePrintClick}>Распечатать позиции</div>
        </>
      : null}
    </div>
  );
}

const CartSum = (props) => {
  const { cart } = props;
  const sum = cart.reduce( (sum, item) => sum + (item.price * item.quantity), 0 );
  return <>{sum}</>
}

export default Cart;