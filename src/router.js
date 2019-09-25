import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/Table.vue'
import Form from './views/Form.vue'
import user from './views/user1.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        { path: '/main', component: Main, name: '主页', hidden: true },
        { path: 'table', component: Table, name: 'Table' },
        { path: 'form', component: Form, name: 'Form' },
        { path: 'user', component: user, name: '列表' },
      ]
    }
  ]
})
// import Login from './views/Login.vue'
// import NotFound from './views/404.vue'
// import Home from './views/Home.vue'
// import Main from './views/Main.vue'
// import Table from './views/Table.vue'
// import Form from './views/Form.vue'
// import user from './views/user1.vue'
// import Page4 from './views/nav2/Page4.vue'
// import Page5 from './views/nav2/Page5.vue'
// import Page6 from './views/nav3/Page6.vue'
// import echarts from './views/charts/echarts.vue'

// let routes = [
//     {
//         path: '/login',
//         component: Login,
//         name: '',
//         hidden: true
//     },
//     {
//         path: '/404',
//         component: NotFound,
//         name: '',
//         hidden: true
//     },
//     { path: '/main', component: Main },
//     {
//         path: '/',
//         component: Home,
//         redirect: '/table',
//         name: '导航一',
//         iconCls: 'el-icon-message',//图标样式class
//         children: [
//             { path: '/main', component: Main, name: '主页', hidden: true },
//             { path: '/table', component: Table, name: 'Table' },
//             { path: '/form', component: Form, name: 'Form' },
//             { path: '/user', component: user, name: '列表' },
//         ]
//     },
// ];

// export default routes;
