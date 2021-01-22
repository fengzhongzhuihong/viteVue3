<template>
  <el-submenu v-if="(item.children && hasName(item)) && !item.hidden"
              :index="item.path">
    <template slot="title">
      <i v-if="item.meta"
         class="iconfont"
         :class="item.meta.iconName"></i>
      <span slot="title">{{item.name}}</span>
    </template>
    <menu-item v-for="child in item.children"
               :key="compilePath(item.path,child.path)"
               :child="child"
               :basePath="item.path" />
  </el-submenu>
  <menu-item :child="item.children[0]"
             v-else-if="item.children && !item.hidden"
             :basePath="item.path" />
</template>

<script>
  import path from 'path'
  import MenuItem from './item.vue'
  export default {
    props: {
      item: {
        type: Object
      }
    },
    components: {
      MenuItem
    },
    methods: {
      compilePath(itempath, childpath) {
        return path.resolve(itempath, childpath)
      },
      hasName(item){
        return item.name? true: false
      }
    }
  }
</script>
