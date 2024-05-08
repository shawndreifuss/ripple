'use client'
import { Badge } from '@/components/ui/badge'
import { EditorBtns } from '@/lib/constants'
import { EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from "react";
import SingleFeature from './_components/SingleFeature'



type Props = {
  element: EditorElement | any
}

const Features1 = (props: Props) => {

  console.log(props.element.content)

    const featuresData = [
        {
          id: 1,
          icon: "/images/icon/icon-01.svg",
          title: props.element.content?.fTitle1,
          description:  props.element.content?.fDescription1,
          },
        {
          id: 2,
          icon: "/images/icon/icon-02.svg",
          title: props.element.content?.fTitle2,
          description: props.element.content?.fDescription2,
        },
        {
          id: 3,
          icon: "/images/icon/icon-03.svg",
          title: props.element.content?.fTitle3,
          description:props.element.content?.fDescription3,
        },
        {
          id: 4,
          icon: "/images/icon/icon-04.svg",
          title:props.element.content?.fTitle4,
          description:props.element.content?.fDescription4,
        },
        {
          id: 5,
          icon: "/images/icon/icon-05.svg",
          title: props.element.content?.fTitle5,
          description:props.element.content?.fDescription5,
        },
        {
          id: 6,
          icon: "/images/icon/icon-06.svg",
          title: props.element.content?.fTitle6,
          description:props.element.content?.fDescription6,
        },
      ];
      

  const { dispatch, state } = useEditor()
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: props.element,
      },
    })
  }

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'features-1')}
      onClick={handleOnClick}
      className={clsx(
        'p-[2px] w-full m-[5px] relative text-[16px] transition-all dark:bg-gray-900',
        {
          '!border-blue-500':
            state.editor.selectedElement.id === props.element.id,
          '!border-solid': state.editor.selectedElement.id === props.element.id,
          'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
        }
      )}
    >
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">
            {state.editor.selectedElement.name}
          </Badge>
        )}

{/* ======= */}

<section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>


      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  )
}

export default Features1
