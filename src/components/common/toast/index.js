import Toast from './Toast'

const ToastIndex = {}
// 将toast变成一个插件
ToastIndex.install = function (Vue) {
  // 1.创建组件构造器
  const toastClient = Vue.extend(Toast)
  // 2.利用new 实例化组件构造器
  const toast = new toastClient()
  // 3.将实例化的组件构造器挂载到一个dom中
  toast.$mount(document.createElement('div'))
  // 4.将挂载的dom添加到body中
  document.body.appendChild(toast.$el)
  // 5.将实例化的组件构造器在vue的prototype中添加$toast
  Vue.prototype.$toast = toast
}

export default ToastIndex