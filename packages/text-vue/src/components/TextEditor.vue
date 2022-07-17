<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import type { Editor } from '@tiptap/core'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const editor: any = useEditor({
  content: '<p>Typing something you want…… 🎉</p>',
  extensions: [
    StarterKit,
    Underline,
    // Link,
  ],
})

// eslint-disable-next-line no-console
console.log('useEditor', editor)

const useBold = () => editor.value.chain().focus().toggleBold().run()
const isBoldActive = computed(() => editor.value.isActive('bold'))

const useItalic = () => editor.value.chain().focus().toggleItalic().run()
const isItalicActive = computed(() => editor.value.isActive('italic'))

const useStrike = () => editor.value.chain().focus().toggleStrike().run()
const isStrikeActive = computed(() => editor.value.isActive('strike'))

const useUnderline = () => editor.value.chain().focus().toggleUnderline().run()
const isUnderlineActive = computed(() => editor.value.isActive('underline'))

const useOrderedList = () => editor.value.chain().focus().toggleOrderedList().run()
const isOrderedListActive = computed(() => editor.value.isActive('orderedList'))

const useBulletList = () => editor.value.chain().focus().toggleBulletList().run()
const isBulletListActive = computed(() => editor.value.isActive('bulletList'))

const useBlockquote = () => editor.value.chain().focus().toggleBlockquote().run()
const isBlockquoteActive = computed(() => editor.value.isActive('blockquote'))

const useCodeBlock = () => editor.value.chain().focus().toggleCodeBlock().run()
const isCodeBlockActive = computed(() => editor.value.isActive('codeBlock'))

const useHorizontalRule = () => editor.value.chain().focus().setHorizontalRule().run()

const useUndo = () => editor.value.chain().focus().undo().run()
const disabledUndo = computed(() => !editor.value.can().undo())

const useRedo = () => editor.value.chain().focus().redo().run()
const disabledRedo = computed(() => !editor.value.can().redo())

onBeforeUnmount(() => editor.value.destroy())
</script>

<template>
  <div v-if="editor">
    <button :disabled="disabledUndo" @click="useUndo">
      <div i-carbon:undo title="撤销" />
    </button>

    <button :disabled="disabledRedo" @click="useRedo">
      <div i-carbon:redo title="重做" />
    </button>

    <button :class="{ 'is-active': isBoldActive }" @click="useBold">
      <div i-carbon:text-bold title="粗体" />
    </button>

    <button :class="{ 'is-active': isItalicActive }" @click="useItalic">
      <div i-carbon:text-italic title="斜体" />
    </button>

    <button :class="{ 'is-active': isUnderlineActive }" @click="useUnderline">
      <div i-carbon:text-underline title="下划线" />
    </button>

    <button :class="{ 'is-active': isStrikeActive }" @click="useStrike">
      <div i-carbon:text-strikethrough title="删除线" />
    </button>

    <button :class="{ 'is-active': isOrderedListActive }" @click="useOrderedList">
      <div i-carbon:list-numbered title="有序列表" />
    </button>

    <button :class="{ 'is-active': isBulletListActive }" @click="useBulletList">
      <div i-carbon:list title="无序列表" />
    </button>

    <button :class="{ 'is-active': isBlockquoteActive }" @click="useBlockquote">
      <div i-carbon:quotes title="引用" />
    </button>

    <button :class="{ 'is-active': isCodeBlockActive }" @click="useCodeBlock">
      <div i-carbon:code title="代码块" />
    </button>

    <button @click="useHorizontalRule">
      <div i-radix-icons:divider-horizontal title="分割线" />
    </button>
  </div>

  <EditorContent :editor="editor" h-100 text-left />
</template>

<style scoped>
* :deep() .ProseMirror-focused {
  outline: none;
}

* :deep() .ProseMirror a {
  color: #68cef8;
}

* :deep() .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

* :deep() .ProseMirror img.ProseMirror-selectednode {
  outline: 3px solid #68cef8;
}

* :deep() .ProseMirror ul[data-type="taskList"] {
  list-style: none;
  padding: 0;
}

* :deep() .ProseMirror ul[data-type="taskList"] li {
  display: flex;
  align-items: center;
}

* :deep() .ProseMirror blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(13, 13, 13, 0.1);
}

* :deep() .ProseMirror hr {
  border: none;
  border-top: 2px solid rgba(13, 13, 13, 0.1);
  margin: 2rem 0;
}

* :deep() .ProseMirror pre {
  background: #25292e;
  color: #fff;
  font-family: Monaco, Menlo, JetBrainsMono, monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

* :deep() .ProseMirror pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
  font-family: Monaco, Menlo, JetBrainsMono, monospace;
}
</style>
