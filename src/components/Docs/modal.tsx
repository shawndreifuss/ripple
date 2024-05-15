import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function Modal() {
  return (
    <div className="absolute w-full h-full z-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full h-full z-50 overflow-hidden hover:bg-black hover:opacity-20"
          >
            Open Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="w-1/2 h-1/2 p-8">
          <div
            style={{ padding: "50.83% 0 0 0", position: "relative" }}
          >
            <iframe
              src="https://player.vimeo.com/video/946450529?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
              title="RippleEffect.webm"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </DialogContent>
      </Dialog>
    </div>
  );
}
