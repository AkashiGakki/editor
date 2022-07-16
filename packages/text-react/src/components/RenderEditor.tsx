import { useEditor } from '@editor/core'

export function RenderEditor() {
  const el = document.createElement('container')
  const instance = useEditor(el)
  document.getElementById('editor')?.appendChild(el)
  // eslint-disable-next-line no-console
  console.log('instance', instance)

  return (
    <>
      <div id="editor" />
    </>
  )
}

export default RenderEditor
