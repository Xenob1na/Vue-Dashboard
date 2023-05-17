<script>
import { RouterLink, RouterView } from 'vue-router'
import vAside from './components/v-aside.vue';
import vHeader from './components/v-header.vue';
export default {
  components: {
    vAside,
    vHeader
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header><v-header/></el-header>
      <el-container>
        <el-aside width="200px" style="margin-left: 20px; margin-top: 70px;">
          <v-aside/>
        </el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
  
</template>

<style scoped>
.container {
  max-width: 1440px;
  padding: 0;
  margin: 0 auto;
}


</style>
