export const addItemToCart = (item) => ({
  type: 'ITEM_ADD',
  payload: {
    item,
  },
});

export const removeItemFromCart = (id) => ({
  type: 'ITEM_REMOVE',
  payload: {
    id,
  },
});

export const addItemQuantity = (id) => ({
  type: 'ITEM_QUANTITY_ADD',
  payload: {
    id,
  },
});

export const turnDownItemQuantity = (id) => ({
  type: 'ITEM_QUANTITY_TURN_DOWN',
  payload: {
    id,
  },
});

export const openCart = () => ({
  type: 'CART_OPEN',
  payload: {},
});

export const closeCart = () => ({
  type: 'CART_CLOSE',
  payload: {},
});

export const fillSlider = (items) => ({
  type: 'FILL_SLIDER',
  payload: { items, },
});

export const shiftSliderLeft = () => ({
  type: 'SHIFT_LEFT',
  payload: {},
});

export const shiftSliderRight = () => ({
  type: 'SHIFT_RIGHT',
  payload: {},
});