<template>
    <div class="Reports">
        <main class="main">
            <div class="main-container">
                <div class="container">
                    <div class="error">
                        <el-empty description="404" />
                        <div class="back">
                            <router-link to="/">
                            <el-button class="el-container-btn-el-button" text>
                                Back
                            </el-button>
                        </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>

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
  padding: 0;
  margin: 0 auto;
}
.el-container-btn-el-button {
    width: 150px;
    height: 60px;
    background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
    border-radius: 13.5963px;
    cursor: pointer;
    transition: all 1s;
    font-family: 'Raleway';
    margin-bottom: 30px;
    
}
.el-container-btn-el-button.is-text {
    color: #FFFFFF;
}
.el-container-btn-el-button.is-text:not(.is-disabled):hover {
  background: #1f2227;
}
.back {
    display: flex;
    justify-content: center;
}
</style>