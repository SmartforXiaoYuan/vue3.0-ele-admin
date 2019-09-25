<template>
  <div class="left-side">
    <div class="left-side-inner">
      <router-link to="/" class="logo block">
        <div style="">运营平台</div>
      </router-link>
      <el-menu
        class="menu-box"
        theme="dark"
        router
        :default-active="$route.path">
        <div
          v-for="(item, index) in nav_menu_data"
          :key="index">
          <el-menu-item
            class="menu-list"
            v-if="typeof item.child === 'undefined'"
            :index="item.path">
            <i class="icon fa" :class="item.icon"></i>
            <span v-text="item.title" class="text"></span>
          </el-menu-item>
          <el-submenu
            :index="item.path"
            v-else>
            <template slot="title">
              <i class="icon fa" :class="item.icon"></i>
              <span v-text="item.title" class="text"></span>
            </template>
            <el-menu-item
              class="menu-list"
              v-for="(sub_item, sub_index) in item.child"
              :index="sub_item.path"
              :key="sub_index">
              <!--<i class="icon fa" :class="sub_item.icon"></i>-->
              <span v-text="sub_item.title" class="text"></span>
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name: 'slide',
    data(){
      return {
        nav_menu_data: [{
          title: "系统设置",
          path: "/",
          icon: "fa-cog"
        },{
          title: "数据管理",
          path: "/",
          icon: "fa-support",
          child:[
            {
              title: "用户列表",
              path: "/user",
              icon: "fa-home"
            }
          ]
        },
        {
          title: "添加数据",
          path: "/",
          icon: "fa-support",
          child:[
            {
              title: "添加商品",
              path: "/addProduct",
              icon: "fa-home"
            }
          ]
        }]
      }
    }
  }
</script>
