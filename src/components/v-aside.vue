<script setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Message,
} from '@element-plus/icons-vue'

import { CaretBottom } from '@element-plus/icons-vue'

const isCollapse = ref(true)


</script>

<template>
  <div class="container-aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">Открыть</el-radio-button>
    <el-radio-button :label="true">Свернуть</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo el-menu-color"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Campaigns</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Reports</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><document /></el-icon>
      <template #title>Analitics</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Message /></el-icon>
      <template #title>Inbox</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><setting /></el-icon>
      <template #title>Setting</template>
    </el-menu-item>
  </el-menu>
  <div class="containerProfile">
    <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Click Me
      <el-icon class="el-icon--right"><caret-bottom /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item class="clearfix">
          Профиль
          <el-badge class="mark"  />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          Выход
          <el-badge class="mark"  />
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
  </div>
</template>

<style scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  font-family: 'Raleway';
}
/* .el-menu-color {
  background-color: #22262F;
} */

.containerProfile {
  margin-top: 30px;
  font-family: 'Raleway';
  cursor: pointer;
}
.el-dropdown-item {
  color: #fff;
}
</style>
