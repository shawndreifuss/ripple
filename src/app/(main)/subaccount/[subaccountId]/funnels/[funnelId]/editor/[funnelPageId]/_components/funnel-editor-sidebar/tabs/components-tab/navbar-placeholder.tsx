import { EditorBtns } from '@/lib/constants'
import React from 'react'

type Props = {}

const NavbarPlaceholder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'navbar')}
      className=" h-14 w-14 bg-muted/70 rounded-lg p-2 flex align-center justify-center flex-row gap-[4px]"
    >
      <div className="border-dashed border-[1px] h-2 rounded-sm bg-muted m-auto border-muted-foreground/50 w-full" />
    </div>
  )
}

export default NavbarPlaceholder
