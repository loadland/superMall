export default {
  addActions(state, product) {
    product.count++;
  },
  somActions(state, product) {
    product.carks = true
    state.cartList.push(product);
  }
}