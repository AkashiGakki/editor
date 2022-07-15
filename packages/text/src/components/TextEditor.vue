<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});
</script>

<template>
  <EditorContent :editor="editor" />
</template>

<style scoped>
</style>
