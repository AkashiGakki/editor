import type { Editor } from '@tiptap/core'
import './Menu.css'

interface Props {
  editor: Editor
}

const Menu = ({ editor }: Props) => {
  const useUndo = () => editor.chain().focus().undo().run()

  const useRedo = () => editor.chain().focus().redo().run()

  const useBold = () => editor.chain().focus().toggleBold().run()

  const useItalic = () => editor.chain().focus().toggleItalic().run()

  const useStrike = () => editor.chain().focus().toggleStrike().run()

  const useUnderline = () => editor.chain().focus().toggleUnderline().run()

  const useOrderedList = () => editor.chain().focus().toggleOrderedList().run()

  const useBulletList = () => editor.chain().focus().toggleBulletList().run()

  const useBlockquote = () => editor.chain().focus().toggleBlockquote().run()

  const useCodeBlock = () => editor.chain().focus().toggleCodeBlock().run()

  const useHorizontalRule = () => editor.chain().focus().setHorizontalRule().run()

  return (
    <>
      <button disabled={!editor.can().undo()} onClick={useUndo}>
        <div className="i-carbon:undo" title="撤销" />
      </button>

      <button disabled={!editor.can().redo()} onClick={useRedo}>
        <div className="i-carbon:redo" title="重做" />
      </button>

      <button className={editor.isActive('bold') ? 'is-active' : ''} onClick={useBold}>
        <div className="i-carbon:text-bold" title="粗体" />
      </button>

      <button className={editor.isActive('italic') ? 'is-active' : ''} onClick={useItalic}>
        <div className="i-carbon:text-italic" title="斜体" />
      </button>

      <button className={editor.isActive('underline') ? 'is-active' : ''} onClick={useUnderline}>
        <div className="i-carbon:text-underline" title="下划线" />
      </button>

      <button className={editor.isActive('strike') ? 'is-active' : ''} onClick={useStrike}>
        <div className="i-carbon:text-strikethrough" title="删除线" />
      </button>

      <button className={editor.isActive('orderedList') ? 'is-active' : ''} onClick={useOrderedList}>
        <div className="i-carbon:list-numbered" title="有序列表" />
      </button>

      <button className={editor.isActive('bulletList') ? 'is-active' : ''} onClick={useBulletList}>
        <div className="i-carbon:list" title="无序列表" />
      </button>

      <button className={editor.isActive('blockquote') ? 'is-active' : ''} onClick={useBlockquote}>
        <div className="i-carbon:quotes" title="引用" />
      </button>

      <button className={editor.isActive('codeBlock') ? 'is-active' : ''} onClick={useCodeBlock}>
        <div className="i-carbon:code" title="代码块" />
      </button>

      <button onClick={useHorizontalRule}>
        <div className="i-radix-icons:divider-horizontal" title="分割线" />
      </button>
    </>
  )
}

export default Menu
