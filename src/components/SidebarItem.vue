
<template>
  <div class="menu-wrapper">
    <!--$router.options.routes获取router的内容-->
    <!-- 循环router,获取第一层item -->
    <template v-for="item in this.$router.options.routes">
      <el-submenu :index="item.path" :key="item.path">
        <div #title @click="jump(item.name)">
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </div>

        <!-- 循环第二层children获取第三层child -->
<!--        <template v-for="child in item.children">-->
<!--          &lt;!&ndash; 判断是否存在第三层，如果存在则显示 &ndash;&gt;-->
<!--          <div-->
<!--            v-if="child.children != null && child.children.length > 0"-->
<!--            :key="child.path"-->
<!--          >-->
<!--            <el-menu-item-group :index="child.path" :key="child.path">-->
<!--            <template #title>分组一</template>-->
<!--            <el-menu-item index="1-1">{{ child.name }}</el-menu-item>-->
<!--&lt;!&ndash;            <el-menu-item index="1-2">选项2</el-menu-item>&ndash;&gt;-->
<!--          </el-menu-item-group>-->
<!--            &lt;!&ndash; 展示第三层 &ndash;&gt;-->
<!--            <el-submenu>-->
<!--              <template slot="title"></template>-->
<!--              <template v-for="child1 in child.children">-->
<!--                <router-link-->
<!--                  v-if="-->
<!--                    child1.path != null &&-->
<!--                      child1.path.indexOf('http') != 0 &&-->
<!--                      child1.path != ''-->
<!--                  "-->
<!--                  :to="child.path + '/' + child1.path"-->
<!--                  :key="child1.path"-->
<!--                >-->
<!--                  <el-menu-item :index="child1.path">{{-->
<!--                    child1.name-->
<!--                    }}</el-menu-item>-->
<!--                </router-link>-->
<!--              </template>-->
<!--            </el-submenu>-->
<!--          </div>-->
<!--          &lt;!&ndash; 如果第三层不存在则只展示第二层 &ndash;&gt;-->
<!--          <div v-else :key="child.path">-->
<!--            <router-link-->
<!--              v-if="-->
<!--                child.path != null &&-->
<!--                  child.path.indexOf('http') != 0 &&-->
<!--                  child.path != ''-->
<!--              "-->
<!--              :to="item.path + '/' + child.path"-->
<!--              :key="child.name"-->
<!--            >-->
<!--              <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </template>-->
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array
      }
    },
    data () {
      return {
        status: 0
      }
    },
    setup(){
     const jump=function (path) {
        this.$router.push(path||'/foo')
      }
      return {jump}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
