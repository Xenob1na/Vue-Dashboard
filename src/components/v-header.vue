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
                 color:  white;
                 outline: none;
                 padding-left: 15px;
                 "
                 class="inputik"
            />
            <img src="../assets/images/search.png" alt="" class="el-container-search-img">
        </div>
    </el-container>
    </div>
</template>


<script setup>

import { ref } from 'vue'
const input = ref('')

</script>


<style>
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

</style>