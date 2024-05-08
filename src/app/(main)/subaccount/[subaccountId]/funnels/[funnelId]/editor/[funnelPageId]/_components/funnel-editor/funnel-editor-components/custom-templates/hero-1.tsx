'use client'
import { Badge } from '@/components/ui/badge'
import { EditorBtns } from '@/lib/constants'
import { EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


type Props = {
  element: EditorElement
}

const Hero1 = (props: Props) => {
  const { dispatch, state } = useEditor()
  const [mounted, setMounted] = useState(false);
console.log({props})
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
      onDragStart={(e) => handleDragStart(e, 'hero-1')}
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

<>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
                {props.element.content?.subtitle }
              </h4>
              <h1 className="mb-32 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              {props.element.content?.title } <br />
                <div className="absolute mt-7 flex space-around align-center ">
                  <span>with</span>{" "}
                  <span className="text-[6rem] ml-7 text-primary">{props.element.content?.brand}</span>
                </div>
              </h1>
              <div>
                <span className="font-bolder  uppercase text-primary ">

                </span>{props.element.content?.description}
              </div>

              <div className="mt-10">
                  <div className="flex flex-wrap gap-5">
                    <Link href={props.element.content?.buttonLink}
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      {props.element.content?.buttonText}
                    </Link>
                    <Link href={props.element.content?.buttonLink2}
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      {props.element.content?.buttonText2}
                    </Link>
                  </div>
              </div>
            </div>
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l "
                    src={props.element.content?.heroImage}
                    alt="Hero"
                    fill
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


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

export default Hero1
