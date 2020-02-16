import { combineReducers } from 'redux';


const cart = (state=[], action) => {
  switch(action.type) {
    case 'ITEM_ADD': {
      const { item } = action.payload;
      return [...state, {...item, quantity: 1}];
    }
    case 'ITEM_REMOVE': {
      const { id } = action.payload;
      return state.filter( (item) => item.id !== id );
    }
    case 'ITEM_QUANTITY_ADD': {
      const { id } = action.payload;
      return state.map( (item) => item.id === id ? {...item, quantity: item.quantity + 1}: item );
    }
    case 'ITEM_QUANTITY_TURN_DOWN': {
      const {id} = action.payload;
      state = state.map( (item) => item.id === id ? {...item, quantity: item.quantity - 1}: item );
      return state.filter( (item) => item.quantity > 0 );
    }
    default: 
      return state;
  }
}

const slider = (state=[], action) => {
  switch (action.type) {
    case 'FILL_SLIDER': {
      return action.payload.items;
    }
    case 'SHIFT_LEFT': {
      const len = state.length;
      return [...state.slice(len - 1, len), ...state.slice(0, -1)];
    }
    case 'SHIFT_RIGHT': {
      return [...state.slice(1, state.length), state[0]];
    }
    default: {
      return state;
    }
  }
}

const cartWindow = (state=false, action) => {
  switch (action.type) {
    case 'CART_OPEN':
      return true;
    case 'CART_CLOSE':
      return false;
    default: 
      return state;
  }
}

export default combineReducers({cart, cartWindow, slider});