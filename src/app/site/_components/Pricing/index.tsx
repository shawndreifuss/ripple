import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { stripe } from '@/lib/stripe'
import { pricingCards } from '@/lib/constants'
import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Pricing = async () => {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  })
  console.log(prices.data)
  return (
    <>


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








      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
               }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
           {pricingCards.map((card) => (
            <>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {card.price}{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className={clsx("mb-2.5 text-para2 font-medium text-black dark:text-white", {
      'text-primary font-bold font-10': card.title === 'Unlimited Saas' ,
    })
              }>
                {card.title}
              </h4>
           
              <p className={clsx('', {
      'font-bold': card.title === 'Unlimited Saas' ,
    })}>{card.description}</p>
        

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {card.features.map((feature) => (
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee flex gap-2">
                    <Check />
                    {feature}
                  </li>
                  ))}
                </ul>
              </div>

              <button 
                aria-label="Get the Plan button"
                className={clsx("group/btn inline-flex p-5 items-center border-foreground rounded-xl border gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary", {
                  'dark:border-primary border rounded-xl hover:text-white text-white bg-primary dark:text-foreground dark:border-accent dark:hover:text-primary border-accent border': card.title === 'Unlimited Saas' ,
                })
                }
              >
                <Link href={`/agency?plan=${prices.data[0].id}`}className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button> 
              </div>
              </>
              ))}
           
           
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
