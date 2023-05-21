<script setup>
import { ref } from 'vue'

const infos = ref([
  {
    imgone: '/img/people.png',
    imgtwo: '/img/row-down.png',
    seeinfop: 'all followers',
    seeinfospan: '1000',
    interest: '1.2 %',
    month: 'this month'
  },
  {
    imgone: '/img/cash.png',
    imgtwo: '/img/row-up.png',
    seeinfop: 'total earning',
    seeinfospan: '125K',
    interest: '2.12 %',
    month: 'this month'
  },
  {
    imgone: '/img/people.png',
    imgtwo: '/img/row-up.png',
    seeinfop: 'all users',
    seeinfospan: '64K',
    interest: '12.5 %',
    month: 'this month'
  }
])
</script>

<template>
  <main class="main">
   <div class="main-container">
    <div class="container">
        <div class="info-special">
          <h3 class="info-special-h3">Special premium account!</h3>
          <p class="info-special-p">With a special premium account, you can do very interesting things!
By purchasing this account, special features will be activated for you that you will be amazed to see!</p>
          <div class="info-special-btns">
            <el-button class="el-container-btn-el-button" text >
              Account purchase <el-icon class="el-icon--right plus"><img src="../assets/icons/shopping-cart.svg" alt="" class="el-icon-img"></el-icon>
            </el-button>
            <el-button class="el-container-btn-el-button" text >
              View features <el-icon class="el-icon--right plus"><img src="../assets/icons/flash.svg" alt="" class="el-icon-img"></el-icon>
            </el-button>
          </div>
        </div>
        <div class="info-special-img">
          <img src="../assets/images/special.png" alt="">
        </div>
   </div>
   </div>
    <div class="container-see-info">
      <div class="see-info" v-for="(info, index) in infos" :key="index" >
        <div class="see-info-left">
          <img :src="info.imgone" alt="img">
          <p class="see-info-p">{{ info.seeinfop }}<br> <span class="see-info-span">{{ info.seeinfospan }}</span></p>
        </div>
        <div class="see-info-right">
          <div class="see-info-right-interest">
            <img :src="info.imgtwo" alt="dd" class="see-info-right-img">
            <p class="see-info-right-p-interest">{{ info.interest }}</p>
          </div>
          <div class="see-info-right-text">
            <p class="see-info-right-p">this month</p>
            <el-button class="el-container-btn-el-buttons" text >
              see info 
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  max-width: 1060px;
  margin-top: 75px;
}
.main-container {
  border-radius: 29.1349px;
  background: rgba(46, 50, 60, 0.6);
}
.container {
  max-width: 970px;
  padding: 0;
  margin: 0 auto;
  display: flex;
}
.info-special-h3 {
  margin: 0;
  padding-top: 74px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 32.0484px;
  line-height: 38px;
  color: #fff;
}
.info-special-p {
  max-width: 566px;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16.5098px;
  line-height: 29px;
  color: #FFFFFF;
}
.el-container-btn-el-button {
    width: 215px;
    height: 66px;
    background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
    border-radius: 13.5963px;
    cursor: pointer;
    transition: all 1s;
    font-family: 'Raleway';
    padding-right: 25px;
    
    
}
.el-container-btn-el-button.is-text {
    color: #FFFFFF;
}
.el-container-btn-el-button.is-text:not(.is-disabled):hover {
  background: #1f2227;
}
.el-icon-img {
  margin-left: 20px;
}
.info-special-img {
  margin: 14px 0px 14px 0px;
}
.container-see-info {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.see-info {
  display: flex;
  justify-content: space-between;
  min-width: 220px;
  padding: 25px 30px 25px 30px;
  background: linear-gradient(119.15deg, #2E374B -13.54%, #292F3C 118.09%);
  border-radius: 24.7205px;
}
.see-info-p {
  margin: 0;
  margin-top: 17px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 14.8323px;
  line-height: 22px;
  color: #B6B7BC;
}
.see-info-span  {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 29.6646px;
  line-height: 44px;
  color: #FFFFFF;
}
.see-info-right-interest {
  display: flex;
}
.see-info-right-p-interest {
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 19.7764px;
  line-height: 30px;
  color: #FFFFFF;
}
.see-info-right-p {
  margin: 0;
  margin-top: 9px;
  margin-left: 20px;
  margin-bottom: 16px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #B6B7BC;
}
.see-info-right-img {
  width: 33.82px;
  height: 15.46px;
  padding-right: 19px;
  padding-top: 10px;
}
.see-info-right-text {
  padding-left: 19px;
}

.el-container-btn-el-buttons {
    width: 102px;
    height: 55px;
    background: #077E71;
    border-radius: 19px;
    cursor: pointer;
    transition: all 1s;
    font-family: 'Raleway';
    padding-right: 25px;
    
    
}
.el-container-btn-el-buttons.is-text {
    color: #FFFFFF;
}
.el-container-btn-el-buttons.is-text:not(.is-disabled):hover {
  background: #0bb39f;
}
</style>