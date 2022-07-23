<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, unref, ShallowRef } from 'vue'
import { useMouse } from '@vueuse/core'

import type { Editor } from '@tiptap/core'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Gapcursor from '@tiptap/extension-gapcursor'
import Highlight from '@tiptap/extension-highlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Dropcursor from '@tiptap/extension-dropcursor'
import Typography from '@tiptap/extension-typography'

import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const ydoc = new Y.Doc()

const provider = new WebrtcProvider('akashi-test', ydoc)

const editor: ShallowRef<Editor> = useEditor({
  // content: '<p>Typing something you want…… 🎉</p>',
  extensions: [
    StarterKit,
    Underline,
    TaskItem.configure({
      nested: true,
    }),
    TaskList,
    Collaboration.configure({
      document: ydoc,
    }),
    // CollaborationCursor.configure({
    //   provider,
    //   user: {
    //     name: '@akashi',
    //     color: '#f783ac',
    //   },
    // }),
    Placeholder.configure({
      placeholder: 'Typing something you want…… 🎉',
    }),
    Image,
    Gapcursor,
    Dropcursor,
    Highlight.configure({ multicolor: true }),
    CodeBlockLowlight.configure({
      lowlight,
    }),
    TextStyle,
    Color,
    Typography,
  ],
}) as ShallowRef<Editor>

const useBold = () => editor.value.chain().focus().toggleBold().run()
const isBoldActive = computed(() => editor.value.isActive('bold'))

const useItalic = () => editor.value.chain().focus().toggleItalic().run()
const isItalicActive = computed(() => editor.value.isActive('italic'))

const useStrike = () => editor.value.chain().focus().toggleStrike().run()
const isStrikeActive = computed(() => editor.value.isActive('strike'))

const useUnderline = () => editor.value.chain().focus().toggleUnderline().run()
const isUnderlineActive = computed(() => editor.value.isActive('underline'))

const useHighlight = () => editor.value.chain().focus().toggleHighlight().run()
const isHighlightActive = computed(() => editor.value.isActive('highlight'))

const useColor = (e: Event) => editor.value.chain().focus().setColor((e.target as HTMLInputElement).value).run()
const colorAttribute = computed(() => editor.value.getAttributes('textStyle').color)

const useOrderedList = () => editor.value.chain().focus().toggleOrderedList().run()
const isOrderedListActive = computed(() => editor.value.isActive('orderedList'))

const useBulletList = () => editor.value.chain().focus().toggleBulletList().run()
const isBulletListActive = computed(() => editor.value.isActive('bulletList'))

const useTaskList = () => editor.value.chain().focus().toggleTaskList().run()
const isTaskListActive = computed(() => editor.value.isActive('taskList'))

const useBlockquote = () => editor.value.chain().focus().toggleBlockquote().run()
const isBlockquoteActive = computed(() => editor.value.isActive('blockquote'))

const useCodeBlock = () => editor.value.chain().focus().toggleCodeBlock().run()
const isCodeBlockActive = computed(() => editor.value.isActive('codeBlock'))

const useHorizontalRule = () => editor.value.chain().focus().setHorizontalRule().run()

const useUndo = () => editor.value.chain().focus().undo().run()
const disabledUndo = computed(() => !editor.value.can().undo())

const useRedo = () => editor.value.chain().focus().redo().run()
const disabledRedo = computed(() => !editor.value.can().redo())

onBeforeUnmount(() => {
  editor.value.destroy()
  provider.destroy()
})
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

    <button @click="useColor">
      <input type="color" class="op-0 absolute z-1 right-50%" :value="colorAttribute" @input="useColor($event)">
      <div i-carbon:text-color title="文本颜色" />
    </button>

    <button :class="{ 'is-active': isHighlightActive }" @click="useHighlight">
      <div i-carbon:text-fill title="文本高亮" />
    </button>

    <button :class="{ 'is-active': isOrderedListActive }" @click="useOrderedList">
      <div i-carbon:list-numbered title="有序列表" />
    </button>

    <button :class="{ 'is-active': isBulletListActive }" @click="useBulletList">
      <div i-carbon:list title="无序列表" />
    </button>

    <button :class="{ 'is-active': isTaskListActive }" @click="useTaskList">
      <div i-carbon:list-checked title="任务列表" />
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

  <EditorContent :editor="(editor as any)" h-100 text-left />
</template>

<style scoped>
@import '../styles/TextEditor.css';
@import '../styles/CodeLowLight.css';
</style>
