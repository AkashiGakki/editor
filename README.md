# editor

📄 A Lightweight Rich Text Editor With Markdown.

## Usage

### In vue

```shell
pnpm i @use-kit/editor-vue
```

```vue
<script setup lang="ts">
import EditorVue from '@use-kit/editor-vue'
</script>

<template>
  <EditorVue />
</template>
```

## In react

```shell
pnpm i @use-kit/editor-react
```

```tsx
import EditorText from '@use-kit/editor-react'

const EditorView = () => {
  return (
    <>
      <EditorText />
    </>
  )
}

export default EditorView
```

## Features && TODO

- `CollaborationCursor`
- `Floating Menu`
- `Font Family`
- `Heading`
- `Image`
- `Link`
- `Mention`
- `Table`
- `TextAlign`
- `Video`

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
