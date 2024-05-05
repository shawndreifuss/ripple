'use client';
import Navigation from '@/components/site/navigation'
import Footer from '@/app/site/_components/Footer'
import Header from '@/app/site/_components/Header'
import ScrollToTop from '@/app/site/_components/ScrollToTop'
import Lines from '@/app/site/_components/Lines'


import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
          {children}
    </ClerkProvider>
  )
}

export default layout