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




export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  })

  return (
    <main>
      <p>
        <Lines />
        <Header />
      </p>
    </main>
  )
}
















//Pricing Card
{/* <div className="flex  justify-center gap-4 flex-wrap mt-6">
{prices.data.map((card) => (
  //WIP: Wire up free product from stripe
  <Card
    key={card.nickname}
    className={clsx('w-[300px] flex flex-col justify-between', {
      'border-2 border-primary': card.nickname === 'Unlimited Saas',
    })}
  >
    <CardHeader>
      <CardTitle
        className={clsx('', {
          'text-muted-foreground': card.nickname !== 'Unlimited Saas',
        })}
      >
        {card.nickname}
      </CardTitle>
      <CardDescription>
        {
          pricingCards.find((c) => c.title === card.nickname)
            ?.description
        }
      </CardDescription>
    </CardHeader>
    <CardContent>
      <span className="text-4xl font-bold">
        {card.unit_amount && card.unit_amount / 100}
      </span>
      <span className="text-muted-foreground">
        <span>/ {card.recurring?.interval}</span>
      </span>
    </CardContent>
    <CardFooter className="flex flex-col items-start gap-4">
      <div>
        {pricingCards
          .find((c) => c.title === card.nickname)
          ?.features.map((feature) => (
            <div
              key={feature}
              className="flex gap-2"
            >
              <Check />
              <p>{feature}</p>
            </div>
          ))}
      </div>
      <Link
        href={`/agency?plan=${card.id}`}
        className={clsx(
          'w-full text-center bg-primary p-2 rounded-md',
          {
            '!bg-muted-foreground':
              card.nickname !== 'Unlimited Saas',
          }
        )}
      >
        Get Started
      </Link>
    </CardFooter>
  </Card>
))}
<Card className={clsx('w-[300px] flex flex-col justify-between')}>
  <CardHeader>
    <CardTitle
      className={clsx({
        'text-muted-foreground': true,
      })}
    >
      {pricingCards[0].title}
    </CardTitle>
    <CardDescription>{pricingCards[0].description}</CardDescription>
  </CardHeader>
  <CardContent>
    <span className="text-4xl font-bold">$0</span>
    <span>/ month</span>
  </CardContent>
  <CardFooter className="flex flex-col  items-start gap-4 ">
    <div>
      {pricingCards
        .find((c) => c.title === 'Starter')
        ?.features.map((feature) => (
          <div
            key={feature}
            className="flex gap-2"
          >
            <Check />
            <p>{feature}</p>
          </div>
        ))}
    </div>
    <Link
      href="/agency"
      className={clsx(
        'w-full text-center bg-primary p-2 rounded-md',
        {
          '!bg-muted-foreground': true,
        }
      )}
    >
      Get Started
    </Link>
  </CardFooter>
</Card>
</div> */}