import type { Editor } from '@tiptap/core'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
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


// import { WebrtcProvider } from 'y-webrtc'
// import * as Y from 'yjs'

import Menu from './Menu'

const MarkdownEditor = () => {
  // const ydoc = new Y.Doc()

  // const provider = new WebrtcProvider('akashi-test', ydoc)

  const editor: Editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      // Collaboration.configure({
      //   document: ydoc,
      // }),
      // CollaborationCursor.configure({
      //   provider,
      //   user: {
      //     name: '@akashi',
      //     color: '#f783ac',
      //   },
      // }),
      Placeholder.configure({
        placeholder: 'Typing…… 🎉',
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
  }) as Editor

  return (
    <div>
      {editor && <Menu editor={editor} />}
      <EditorContent editor={editor as any} className="h-100 text-left" />
    </div>
  )
}

export default MarkdownEditor
