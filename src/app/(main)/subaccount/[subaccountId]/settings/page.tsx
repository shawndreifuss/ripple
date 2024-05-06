import SubAccountDetails from '@/components/forms/subaccount-details'
import UserDetails from '@/components/forms/user-details'
import BlurPage from '@/components/global/blur-page'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'


type Props = {
  params: { subaccountId: string }
}

const SubaccountSettingPage = async ({ params }: Props) => {
  const authUser = await currentUser()
  if (!authUser) return
  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.emailAddresses[0].emailAddress,
    },
  })
  if (!userDetails) return

  const subAccount = await db.subAccount.findUnique({
    where: { id: params.subaccountId },
  })
  if (!subAccount) return

  const agencyDetails = await db.agency.findUnique({
    where: { id: subAccount.agencyId },
    include: { SubAccount: true },
  })

  if (!agencyDetails) return
  const subAccounts = agencyDetails.SubAccount

  return (
    <BlurPage>
             <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/agency">Agency</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href={'#'}>sub-account</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href={'#'}>settings</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      <Separator className=" my-6" />
      <div className="flex lg:!flex-row flex-col gap-4">
        <SubAccountDetails
          agencyDetails={agencyDetails}
          details={subAccount}
          userId={userDetails.id}
          userName={userDetails.name}
        />
        <UserDetails
          type="subaccount"
          id={params.subaccountId}
          subAccounts={subAccounts}
          userData={userDetails}
        />
      </div>
    </BlurPage>
  )
}

export default SubaccountSettingPage