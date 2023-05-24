<template>
    <div>
        <v-inbox-item
        v-for="(inbox, index) in Inboxsms"
        :key="inbox.id"
        :message="inbox"
        />
    </div>
</template>

<script setup>
import vInboxItem from './v-inbox-item.vue';
import { ref } from 'vue'

const Inboxsms = ref([
    {
       id: "1",
       title: "Plato Agency",
       time: "5hr ago",
       body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him."
    },
    {
       id: "2",
       title: "Antoni",
       time: "8hr ago",
       body: "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to f"
    },
    {
       id: "3",
       title: "Danil",
       time: "5hr ago",
       body: "He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him."
    },
    {
       id: "4",
       title: "Anto el primo",
       time: "6hr ago",
       body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him."
    },
    {
       id: "5",
       title: "Armen",
       time: "4hr ago",
       body: "self as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him."
    }
])

</script>

<style scoped>
    
</style>