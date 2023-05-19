<template>
    <div class="container">
    <el-container :direction="vertical">
        <img src="../assets/images/Logo.svg" alt="">
        <div class="el-container-text">
            <h3 class="el-container-text-h3">PAM</h3>
            <p class="el-container-text-p">( Purchase account management )</p>
        </div>
        <div class="el-container-info">
            <h3 class="el-container-info-h3">Dashboard</h3>
            <p class="el-container-info-p">see your account information in here!</p>
        </div>
        <div class="el-container-search">
            <input
            type="search"
                v-model="input"
                placeholder="can’t find something? search it here!"
                style="
                 width: 324px;
                 height: 57px;
                 background: #2E323C;
                 border-radius: 12px;
                 border: none;
                 color:  #fff;
                 outline: none;
                 padding-left: 15px;
                 font-family: 'Raleway';
                 cursor: pointer;
                 "
                 class="inputik"
            />
            <img src="../assets/images/search.png" alt="" class="el-container-search-img">
        </div>
        <div class="el-container-btn">
            <el-button class="el-container-btn-el-button"
            text
           
            >
                make a new product <el-icon class="el-icon--right plus"><Plus /></el-icon>
            </el-button>
        </div>
    </el-container>
    </div>
</template>


<script setup>

import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const input = ref('')

</script>


<style scoped>
:root {
    --btn-bg-color: #181c25;
}
.el-container-text-h3 {
    margin: 20px 0px 0px 0px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
}
.el-container-text-p {
    margin: 0px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
}

.el-container-info {
    margin-left: 62px;
}

.el-container-info-h3 {
    margin: 18px 0px 0px 0px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 29px;
    line-height: 34px;
    color: #FFFFFF;
}

.el-container-info-p {
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
}

.el-container-search {
    margin: 18px 0px 0px 96px;
}

.inputik {
    position: absolute;
}
.el-container-search-img {
    position: relative;
    margin-top: 15px;
    margin-left: 280px;
}

.el-container-btn-el-button {
    width: 231px;
    height: 66px;
    background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
    border-radius: 13.5963px;
    cursor: pointer;
    transition: all 1s;
    font-family: 'Raleway';
    
}
.el-container-btn-el-button.is-text {
    color: #FFFFFF;
}
.el-container-btn-el-button.is-text:not(.is-disabled):hover {
  background: #1f2227;
}

.el-container-btn {
    margin: 11px 0px 0px 96px;
}
.plus {
    background-color: #818690;
    border-radius: 5px;
    width: 27.19px;
    height: 27.19px;
    margin-left: 12px;
}
</style>