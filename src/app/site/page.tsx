import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import { stripe } from '@/lib/stripe'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/site/_components/Header'
import Hero from './_components/Hero'
import Brands from './_components/Brands'
import Feature from './_components/Features'
import About from './_components/About'
import FeaturesTab from './_components/FeaturesTab'
import FunFact from './_components/FunFact'
import Integration from './_components/Integration'
import CTA from './_components/CTA'
import FAQ from './_components/FAQ'
import Testimonial from './_components/Testimonial'
import Pricing from './_components/Pricing'
import Contact from './_components/Contact'
import Blog from './_components/Blog'
import Footer from './_components/Footer'
import Lines from './_components/Lines'
import { getAuthUserDetails } from '@/lib/queries'



export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  }) 

  const user = await getAuthUserDetails()
  console.log(user)

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
















