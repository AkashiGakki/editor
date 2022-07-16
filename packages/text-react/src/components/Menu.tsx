import { BubbleMenu } from '@tiptap/react'
import type { Editor } from '@tiptap/core'

interface Props {
  editor: Editor
}

const Menu = ({ editor }: Props) => {
  const useBold = () => editor.chain().focus().toggleBold().run()

  const useItalic = () => editor.chain().focus().toggleItalic().run()

  const useStrike = () => editor.chain().focus().toggleStrike().run()

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <button className={editor.isActive('bold') ? 'is-active' : ''} onClick={useBold}>
        bold
      </button>
      <button className={editor.isActive('italic') ? 'is-active' : ''} onClick={useItalic}>
        italic
      </button>
      <button className={editor.isActive('strike') ? 'is-active' : ''} onClick={useStrike}>
        strike
      </button>
    </BubbleMenu>
  )
}

export default Menu
