import BlurPage from '@/components/global/blur-page'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { db } from '@/lib/db'
import { Contact, SubAccount, Ticket } from '@prisma/client'
import format from 'date-fns/format'
import React from 'react'
import CraeteContactButton from './_components/create-contact-btn'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'

type Props = {
  params: { subaccountId: string }
}

const ContactPage = async ({ params }: Props) => {
  type SubAccountWithContacts = SubAccount & {
    Contact: (Contact & { Ticket: Ticket[] })[]
  }

  const contacts = (await db.subAccount.findUnique({
    where: {
      id: params.subaccountId,
    },

    include: {
      Contact: {
        include: {
          Ticket: {
            select: {
              value: true,
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  })) as SubAccountWithContacts

  const allContacts = contacts.Contact


  const formatTotal = (tickets: Ticket[]) => {
    if (!tickets || !tickets.length) return '$0.00'
    const amt = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    })

    const laneAmt = tickets.reduce(
      (sum, ticket) => sum + (Number(ticket?.value) || 0),
      0
    )

    return amt.format(laneAmt)
  }
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
      <BreadcrumbLink href={'#'}>contacts</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      <Separator className=" my-6" />
      <div className='flex w-full justify-start align-center p-1 mb-4'>
      <CraeteContactButton subaccountId={params.subaccountId} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/7">Name</TableHead>
            <TableHead className="w-1/7">Phone</TableHead>
            <TableHead className="w-1/7">Email</TableHead>
            <TableHead className="w-1/7">Message</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead className="w-1/7">Total Value</TableHead>
            <TableHead className="w-1/7">Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium truncate ">
          {allContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>
                {contact?.name}
              </TableCell>
              <TableCell>{contact?.phone}</TableCell>
              <TableCell>{contact?.email}</TableCell>
              <TableCell>
              <DropdownMenu>
  <DropdownMenuTrigger>view</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Message</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>{contact.message}</DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>
              </TableCell>

              <TableCell>{format(contact.createdAt, 'MM/dd/yyyy')}</TableCell>
              <TableCell className="">
                {formatTotal(contact.Ticket)}
              </TableCell>
              <TableCell>
                {formatTotal(contact.Ticket) === '$0.00' ? (
                  <Badge variant={'destructive'}>Inactive</Badge>
                ) : (
                  <Badge className="bg-emerald-700">Active</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BlurPage>
  )
}

export default ContactPage