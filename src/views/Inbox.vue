<template >
    <div class="main">
        <div class="container">
            <v-inbox class="v-inbox"/>
        </div>
    </div>
</template>

<script setup>
import vInbox from '../components/v-inbox.vue';
</script>

<style scoped>
.main {
  max-width: 1060px;
  margin-top: 75px;
}
.container {
  max-width: 970px;
  padding: 0;
  margin: 0 auto;
  display: flex;
}

.message-box-up {
    display: flex;
    justify-content: space-between;
}

</style>