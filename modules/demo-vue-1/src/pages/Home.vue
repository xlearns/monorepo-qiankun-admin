<script setup lang="ts">
import { ElMessage } from 'element-plus'

function msg() {
  ElMessage.success('ok')
}
</script>

<template>
  <div>home</div>
  <el-button @click="msg">hello world</el-button>
</template>

<style scoped></style>
