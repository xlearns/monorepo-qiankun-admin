<script setup lang="ts">
import actions from '@/components/actions'
import { onMounted, ref } from 'vue'

const state = ref('')
onMounted(() => {
  actions.onGlobalStateChange((_state: any) => {
    console.log('全局state:', _state)
    state.value = _state
  }, true)
})

function change() {
  actions.setGlobalState({ num: `子组件发出消息: ${Math.random()}` })
}
</script>

<template>
  <div>
    <h1>demo-vue-2</h1>
    <button @click="change">change</button>
  </div>
  <div>state:{{ state }}</div>
</template>

<style scoped></style>
