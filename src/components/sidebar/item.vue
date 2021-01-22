<template>
  <div class="sidebar-container">
    <el-menu :unique-opened="true"
             :collapse-transition="false"
             background-color="rgba(0,0,0,0)"
             :default-active="activeMenu">
      <sidebar-item v-for="(item, index) in routes"
                    :key="index"
                    :item="item" />
    </el-menu>
  </div>
</template>
<script>
  import { routes } from '@/router'
  import SidebarItem from './sidebarItem.vue'
  export default {
    components: {
      SidebarItem
    },
    data() {
      return {
        routes
      }
    },
    computed: {
      activeMenu() {
        return this.$route.path
      }
    }
  }
</script>
