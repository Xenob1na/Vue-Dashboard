<template>
    <div class="inboxpages main">
        <div class="container">
            <div class="container-top">
                <div class="container-top-left">
                    <div class="img">
                        <img :src="inboxs.img" alt="img">
                    </div>
                    <div class="container-top-info">
                        <h3 class="top-info-name">{{ inboxs.title }}</h3>
                        <p class="top-info-email">{{ inboxs.email }}</p>
                    </div>
                </div>
                <div class="container-top-right">
                    <span class="time">{{ inboxs.time }}</span>
                </div>
            </div>
            <div class="container-middle">
                <h4 class="middle-name-p">{{ inboxs.title }}</h4>
                <p class="middle-body-p">{{ inboxs.body }}</p>
            </div>
            <div class="back">
                <RouterLink to="/Inbox" style="text-decoration: none;">
                <el-button class="el-container-btn-el-button" text >
                    <el-icon class="el-icon--left"><Back /></el-icon> Back
                </el-button>
            </RouterLink>
            <div class="btn-del-remove">
                <el-button class="el-container-btn-el-button" text >
                    <el-icon><DeleteFilled /></el-icon>
                </el-button>
                <el-button class="el-container-btn-el-button" text >
                    <el-icon><EditPen /></el-icon>
                </el-button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Back,
    DeleteFilled,
    EditPen
} from '@element-plus/icons-vue'
import inbox from '../mocks/inbox';
export default {
    data() {
        return {
            inboxs: null
        }
    },
    components: {
        Back,
        DeleteFilled,
        EditPen
    },
    created() {
        const inboxs = inbox.find(inboxs => inboxs.id == this.$route.params.id)
        if (inboxs) {
        this.inboxs = inboxs
        }
    }
}
</script>

<style scoped>
.container {
  max-width: 970px;
  padding: 0;
  margin: 0 auto;
} 
.main {
  max-width: 1060px;
  margin-top: 75px;
  background-color: #2E323C;
  border-radius: 10px;
}
.container-top-left {
    display: flex;
}
.container-top {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}
.img {
    margin-right: 20px;
}
.top-info-name {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 8px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
}
.top-info-email {
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #9999a0;
}
.time {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 29px;
    color: #9999a0;
}
.middle-name-p {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 12px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    color: #FFFFFF;
}
.middle-body-p {
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #9999a0;
}
.el-container-btn-el-button {
    margin-top: 40px;
    margin-bottom: 20px;
}
.el-container-btn-el-button.is-text {
    color: #FFFFFF;
}
.el-container-btn-el-button.is-text:not(.is-disabled):hover {
  color: #000000;
}
.back {
    display: flex;
    justify-content: space-between;
}
</style>