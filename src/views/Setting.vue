<template>
    <div class="main">
        <div class="main-container">
            <div class="container">
                <div class="container-box">
                    <div class="conatiner-info">
                        <h2 class="conatiner-info-h2">Setting</h2>
                        <p class="conatiner-info-p">Select the kinds notifications you get about your activities and recommendations</p>
                     </div>
                    <div class="container-search">
                        <div class="el-container-search">
                            <input
                            type="search"
                                v-model="input"
                                placeholder="Search"
                                style="
                                width: 252px;
                                height: 57px;
                                background: #2E323C;
                                border-radius: 12px;
                                border: none;
                                color:  #fff;
                                outline: none;
                                padding: 15px 15px;
                                font-family: 'Raleway';
                                cursor: pointer;
                                "
                                class="inputik"
                            />
                            <img src="../assets/images/search.png" alt="" class="el-container-search-img">
                        </div>
                    </div>
                </div>
                <hr>
                <div class="container-box-2">
                    <div class="email">
                        <h3 class="conatiner-box-h3">Email notifications</h3>
                        <p class="conatiner-box-p">Get emails to find out what's going on when
                            you're not online. You can turn these off.
                        </p>
                    </div>
                    <div class="email-btn">
                        <div class="email-btn-box">
                                <div class="switch">
                                    <el-switch v-model="delivery" />
                                </div>
                            <div class="email-btn-box-info">
                                <h4 class="email-btn-box-h4">News and updates</h4>
                                <p class="email-btn-box-p">News about product anf feature updates</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="container-box-3">
                    <div class="push">
                        <h3 class="conatiner-box-h3">Push notifications</h3>
                        <p class="conatiner-box-p">Get push notifications in app to find out
                            what's going on when you're online
                        </p>
                    </div>
                    <div class="email-btn">
                        <div class="email-btn-box-2">
                            <div class="switch">
                                    <el-switch v-model="delivery2" />
                                </div>
                            <div class="email-btn-box-info">
                                <h4 class="email-btn-box-h4">Reminders</h4>
                                <p class="email-btn-box-p">These are not notifications to remind you of updates you might have missed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const delivery = ref(true)
const delivery2 = ref(true)
</script>

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
  padding: 20px;
  margin: 0 auto;
}
.container-box {
    display: flex;
    justify-content: space-between;
}
.conatiner-info-h2 {
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #fff;
}
.conatiner-info-p {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16.5098px;
    line-height: 29px;
    color: #FFFFFF;
}
.el-container-search-img {
    position: relative;
    margin-top: 15px;
    margin-left: 220px;
}
.inputik {
    position: absolute;
}
.container-box-2 {
    display: flex;
    justify-content: space-between;
}
.conatiner-box-h3 {
    margin: 0;
    margin-top: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    color: #fff;
}
.conatiner-box-p {
    max-width: 400px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16.5098px;
    line-height: 29px;
    color: #FFFFFF;
}
.email-btn-box {
    display: flex;
    margin-right: 35px;
}
.email-btn-box-h4 {
    margin: 0;
    margin-top: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
}
.email-btn-box-p  {
    max-width: 300px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 29px;
    color: #FFFFFF;
}
.email-btn-box-2 {
    display: flex;
}
.container-box-3 {
    display: flex;
    justify-content: space-between;
}
.el-switch {
    margin-top: 15px;
    margin-right: 15px;
}
</style>