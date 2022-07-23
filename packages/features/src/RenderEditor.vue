<script setup lang="ts">
import { useEditor } from '@editor/core'

const div = document.getElementById('container')
const editor = useEditor(div)
// eslint-disable-next-line no-console
console.log('editor', editor)
</script>

<template>
  <div id="container" />
</template>

<style scoped>
</style>
