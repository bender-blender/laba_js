const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
          )
          .filter(item => item.amount > 0),
      };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (acc, item) => {
          const itemTotal = item.price * item.amount;
          acc.total += itemTotal;
          acc.amount += item.amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    default:
      return state;
  }
};

export default reducer;
