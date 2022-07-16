import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menu from './Menu'

const MarkdownEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🎉</p>',
  })
  // eslint-disable-next-line no-console
  console.log('editor', editor)

  return (
    <div>
      {editor && <Menu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}

export default MarkdownEditor
