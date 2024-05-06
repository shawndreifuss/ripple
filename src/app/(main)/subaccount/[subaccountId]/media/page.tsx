import BlurPage from '@/components/global/blur-page'
import MediaComponent from '@/components/media'
import { getMedia } from '@/lib/queries'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

type Props = {
  params: { subaccountId: string }
}

const MediaPage = async ({ params }: Props) => {
  const data = await getMedia(params.subaccountId)

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
      <BreadcrumbLink href={'#'}>media</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      <Separator className=" my-6" />
      <MediaComponent
        data={data}
        subaccountId={params.subaccountId}
      />
    </BlurPage>
  )
}

export default MediaPage