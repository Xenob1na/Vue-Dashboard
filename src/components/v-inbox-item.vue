<template>
    <div class="v-inbox-item">
        <RouterLink :to="{path: `/Inbox/${message.id}`}" style="text-decoration: none;">
        <div class="container-messagge-box">
            <div class="message-box-up">
                <h3 class="message-box-title">{{ message.title }}</h3>
                <span class="message-box-span">{{ message.time }}</span>
            </div>
            <div class="message-box-midlle">
                <p class="message-box-p">{{ message.body }}</p>
            </div>
            <div class="message-box-down">
                <el-button class="el-container-btn-el-button" text >
                    <el-icon class="el-icon--left"><View /></el-icon> View messages
                </el-button>
            </div>
        </div>
        </RouterLink>
    </div>
</template>

<script setup>
import {
    View
} from '@element-plus/icons-vue'

const props = defineProps({
    message: {
        type: Object,
            default() {
                return {

                }
            }
                
    }
})
</script>

<style scoped>
.message-box-up {
    display: flex;
    justify-content: space-between;
}
.message-box-title {
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    color: #FFFFFF;
}
.message-box-span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 29px;
    color: #9999a0;
}
.message-box-p {
    margin: 0;
    margin-top: 12px;
    margin-bottom: 16px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #898989;
}
.el-container-btn-el-button {
    width: 200px;
    height: 50px;
    margin-bottom: 40px;
    background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
    border-radius: 13px;
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
.container-messagge-box {
    transition: all 0.3s;
}
.container-messagge-box:hover {
    background: #2E323C;
    border-radius: 10px;
    cursor: pointer;
    padding: 20px;
    margin-bottom: 20px;
}
</style>