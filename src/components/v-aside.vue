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
  
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">Открыть</el-radio-button>
    <el-radio-button :label="true">Свернуть</el-radio-button>
  </el-radio-group> -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo el-menu-color"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    
    <el-menu-item index="2" class="el-color">
      <el-icon><icon-menu /></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item index="3" class="el-color">
      <el-icon><Histogram /></el-icon>
      <template #title>Reports</template>
    </el-menu-item>
    <el-menu-item index="4" class="el-color">
      <el-icon><DataLine /></el-icon>
      <template #title>Analitics</template>
    </el-menu-item>
    <el-menu-item index="5" class="el-color">
      <el-icon><Message /></el-icon>
      <template #title>Inbox</template>
    </el-menu-item>
    <el-menu-item index="6" class="el-color">
      <el-icon><setting /></el-icon>
      <template #title>Setting</template>
    </el-menu-item>
  </el-menu>
    <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Нажми меня!
      <el-icon class="el-icon--right"><caret-bottom /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item tabindex="0" >
          Профиль
          
        </el-dropdown-item>
        <el-dropdown-item tabindex="0">
          Выход
         
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
 

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
