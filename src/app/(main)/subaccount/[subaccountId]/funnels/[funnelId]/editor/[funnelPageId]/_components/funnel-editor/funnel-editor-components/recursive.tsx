import { EditorElement } from '@/providers/editor/editor-provider'
import React from 'react'
import TextComponent from './text'
import Container from './container'
import VideoComponent from './video'
import LinkComponent from './link-component'
import ContactFormComponent from './contact-form-component'
import Checkout from './checkout'
import Navbar from './navbar'
import PortfolioTemplate from './portfolio-template'

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
    case 'paymentForm':
      return <Checkout element={element} />
    case '2Col':
      return <Container element={element} />
    case '3Col':
      return <Container element={element} />
    case '__body':
      return <Container element={element} />
    case 'navbar':
      return <Navbar element={element} />
    case 'link':
      return <LinkComponent element={element} />
      case 'portfolio-1':
      return <PortfolioTemplate element={element} />
    default:
      return null
  }
}

export default Recursive
