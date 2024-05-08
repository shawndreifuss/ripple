import { EditorBtns } from '@/lib/constants'
import React from 'react'

type Props = {}

const ContactFormComponentPlaceholder = (props: Props) => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return
    e.dataTransfer.setData('componentType', type)
  }
  return (
    <div className="grid grid-cols-1 gap-5">

      {/* Contact us Form Template */}
      <div className="w-full font-bold text-primary text-center my-5">
        Contact us Form Template
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'contactForm-1')}
      className=" w-[80%] mx-auto mt-5 h-40 border border-primary bg-[url('/assets/contactForm1.png')]  bg-no-repeat bg-contain  rounded-lg flex items-center justify-center"
    >
    </div>
    </div>

    {/*  Navbar Template  */} <div className="w-full font-bold text-primary text-center my-5">
        Navbar Template 
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'navbar-1')}
      className=" w-[80%] mx-auto mt-5 h-10 border border-primary bg-[url('/assets/navbar1.png')]  bg-no-repeat bg-contain bg-scale-50 bg-center rounded-lg flex items-center justify-center"
    >
    </div>
    </div>

    {/* Hero Template */}
    <div className="w-full font-bold text-primary text-center my-5">
        Hero Template
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'hero-1')}
      className=" w-[80%] mx-auto mt-5 h-40 border border-primary bg-[url('/assets/hero1.png')]  bg-no-repeat bg-cover  rounded-lg flex items-center justify-center"
    >
    </div>
    </div>

    {/* Features Template */}
    <div className="w-full font-bold text-primary text-center my-5">
        Feature Template
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, 'features-1')}
      className=" w-[80%] mx-auto mt-5 h-40 border border-primary bg-[url('/assets/ripple-features.png')]  bg-no-repeat bg-cover  rounded-lg flex items-center justify-center"
    >
    </div>
    </div>


    </div>
   
  )
}

export default ContactFormComponentPlaceholder
