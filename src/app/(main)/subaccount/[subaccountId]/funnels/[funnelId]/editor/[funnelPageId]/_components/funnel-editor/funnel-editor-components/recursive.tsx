import { EditorElement } from '@/providers/editor/editor-provider'
import React from 'react'
import TextComponent from './text'
import Container from './container'
import VideoComponent from './video'
import LinkComponent from './link-component'
import ContactFormComponent from './contact-form-component'
import Checkout from './checkout'
import Navbar1 from './navbar-1'
import ContactFormCustom from './custom-templates/contact-form-custom'
import Hero1 from './custom-templates/hero-1'
import Features1 from './custom-templates/features-1'



type Props = {
  element: EditorElement
}

const Recursive = ({ element }: Props) => {
  switch (element.type) {
    case 'text':
      return <TextComponent element={element} />
    case 'container':
      return <Container element={element} />
    case 'video':
      return <VideoComponent element={element} />
    case 'contactForm':
      return <ContactFormComponent element={element} />
      case 'contactForm-1':
      return <ContactFormCustom element={element} />
    case 'paymentForm':
      return <Checkout element={element} />
    case '2Col':
      return <Container element={element} />
    case '3Col':
      return <Container element={element} />
    case '__body':
      return <Container element={element} />
    case 'navbar-1':
      return <Navbar1 element={element} />
    case 'link':
      return <LinkComponent element={element} />
    case 'hero-1':
      return <Hero1 element={element} />
      case 'features-1':
      return <Features1 element={element} />
    default:
      return null
  }
}

export default Recursive
