<script setup>
import vInfo from '../components/v-info.vue';
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
      <v-info/>
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

</style>