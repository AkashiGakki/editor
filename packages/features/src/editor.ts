import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

export function useEditor(root: HTMLElement | null): Editor {
  if (!root)
    root = document.body

  const element = document.createElement('div')
  // root.contains(element) ? '' : root.appendChild(element)
  root.appendChild(element)

  const editor = new Editor({
    element,
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌍️ </p>',
  })

  const handler = {
    get() {
      return editor
    }
  }

  const proxy = new Proxy(editor, handler)
  return proxy
}
