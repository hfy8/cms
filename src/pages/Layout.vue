<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100vh
  }
  .layout-header-bar{
    background: #4a5454;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <transition name="fade" mode="out-in">
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-show="isCollapsed">
        <Menu :theme="theme" width="auto" :class="menuitemClasses">
         <Submenu v-for="(item,index) in items" :key="item.title" :name="index"  >
           <template slot="title">
             <Icon :type="item.icon" />
             {{item.title}}
           </template>
           <MenuItem v-for="(subitem,subindex) in item.items" :key="subitem.title" :to="item.path+subitem.path" :name="index+'-'+subindex">{{subitem.title}}</MenuItem>
         </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      </transition>
      <Layout :style="{height:'100vh'}">
        <Header class="layout-header-bar" ><Button icon="md-list" type="primary" @click="slipermodal"/>
        </Header>
        <Breadcrumb separator=">" :style="{margin: '10px 0px 0px 10px'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{margin: '10px', background: '#fff', minHeight: '220px'}">
        <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import menus from '../menu'
import config from '../config'

export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false,
      theme: config.theme.dark
    }
  },
  computed: {
    items () {
      return menus
    },
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    slipermodal () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
