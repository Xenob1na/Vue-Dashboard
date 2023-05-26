<script setup>
import { ref } from 'vue'
import {
  Histogram,
  Menu as IconMenu,
  Setting,
  Message,
  DataLine,
} from '@element-plus/icons-vue'

import { CaretBottom } from '@element-plus/icons-vue'

const isCollapse = ref(true)
  

</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo el-menu-color"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    
  >
  <RouterLink to="/" >
    <el-menu-item index="2" class="el-color">
     <el-icon><icon-menu /></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
  </RouterLink>
    <el-menu-item index="3" class="el-color">
      <el-icon><Histogram /></el-icon>
      <template #title>Reports</template>
    </el-menu-item>
    <el-menu-item index="4" class="el-color">
      <el-icon><DataLine /></el-icon>
      <template #title>Analitics</template>
    </el-menu-item>
    <RouterLink to="/Inbox" >
    <el-menu-item index="5" class="el-color">
      <el-icon><Message /></el-icon>
      <template #title>Inbox</template>
    </el-menu-item>
  </RouterLink>
    <el-menu-item index="6" class="el-color">
      <el-icon><setting /></el-icon>
      <template #title>Setting</template>
    </el-menu-item>
  </el-menu>

 

</template>

<style scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  font-family: 'Raleway';
}
.el-menu-color {
  background-color: #121418;
}

.el-dropdown {
  margin-top: 30px;
  font-family: 'Raleway';
  cursor: pointer;
}
.el-dropdown-item {
  color: #fff;
}
.el-icon {
  color: #fff;
}
.el-dropdown-link {
  color: #fff;
}

.el-color {
  color: #fff;
}
.el-color:hover {
  background: #1f2227;
}

.el-radio-button__inner:hover {
  background: #1f2227;
}

</style>
