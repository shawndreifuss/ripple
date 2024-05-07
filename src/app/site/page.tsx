import { stripe } from '@/lib/stripe'
import Header from '@/app/site/_components/Header'
import Hero from './_components/Hero'
import Feature from './_components/Features'
import About from './_components/About'
import FeaturesTab from './_components/FeaturesTab'
import Integration from './_components/Integration'
import CTA from './_components/CTA'
import Testimonial from './_components/Testimonial'
import Pricing from './_components/Pricing'
import Contact from './_components/Contact'
import Footer from './_components/Footer'
import Lines from './_components/Lines'
import { getAuthUserDetails } from '@/lib/queries'
import { useEffect, useRef } from 'react'
import { redirect } from 'next/navigation'



export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  }) 

  const user = await getAuthUserDetails()
  


  return (
    <main>
      <div className='h-screen w-screen fixed top-0 right-0 left-0 bottom-0 z-[-1] bg-gradient-to-tl opacity-15 from-indigo-200 to-indigo-900'></div>
        <Lines />
        <Header />
        <Hero /> 
        <Feature />
        <About />
        <FeaturesTab />
        <Integration />
        <CTA />
        <Testimonial />
        <Pricing />
        <Contact/>
        <Footer />

    </main>
  )
}
















