export default {
  addCart(context, product) {
    // find方法 \查找元素\ 如果相等就原地返回true
    return new Promise(((resolve, reject) => {
      const items = context.state.cartList.find(item => item.iid === product.iid)

      if (items) {
        context.commit('addActions', items)
        resolve('商品增加成功')
      } else {
        product.count = 1
        resolve('添加商品成功')
        context.commit('somActions', product)
      }
    }))
  }
}