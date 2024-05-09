import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function Modal() {
  return (
    <div className="absolute w-full h-full z-40 opacity-0 hover:bg-black  hover:opacity-20">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full h-full z-50  overflow-hidden hover:bg-black  hover:opacity-20"></Button>
      </DialogTrigger>
      <DialogContent className="w-1/2 h-1/2 p-8">
       <Image src="/assets/coming-soon.jpeg" fill alt="Profile picture" className="w-20 h-20 hover:scale-100 p-8" />
       
      </DialogContent>
    </Dialog>
    </div>
  )
}
