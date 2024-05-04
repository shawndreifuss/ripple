import { generateUploadButton } from "@uploadthing/react";
import { generateUploadDropzone } from "@uploadthing/react";
import { generateReactHelpers } from '@uploadthing/react/hooks'
import { OurFileRouter } from '@/app/api/uploadthing/core'

 

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const {  useUploadThing, uploadFiles} = generateReactHelpers<OurFileRouter>();