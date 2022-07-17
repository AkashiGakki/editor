import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Menu from './Menu'

const MarkdownEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: '<p>Typing…… 🎉</p>',
  })

  // eslint-disable-next-line no-console
  // console.log('editor', editor)

  return (
    <div>
      {editor && <Menu editor={editor} />}
      <EditorContent editor={editor} className="h-100 text-left" />
    </div>
  )
}

export default MarkdownEditor
