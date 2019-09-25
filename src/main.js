import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme-green/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);


router.beforeEach((to, from, next) => {
  //NProgress.start();
  // if (to.path == '/login') {
  //   sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
  next()

  // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  // if (answer) {
  //   next()
  // } else {
  //   next(false)
  // }
})

//路由catch
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
