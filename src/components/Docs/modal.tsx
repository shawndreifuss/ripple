'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function Modal() {
  // State to manage the dialog open/close state
  const [isOpen, setIsOpen] = useState(false);

  // useEffect hook to handle any necessary side effects
  useEffect(() => {
    // Cleanup code to handle any DOM manipulations if necessary
    return () => {
      // Example cleanup code if necessary
    };
  }, []);

  return (
    <div className="absolute w-full h-full z-40">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full h-full z-50 overflow-hidden opacity-20 hover:bg-black hover:opacity-20"
          >
            Open Modal
          </Button>
        </DialogTrigger>
        <DialogContent className="w-1/2 h-1/2 p-8">
          <div style={{ padding: "50.83% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/946450529?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
              title="RippleEffect.webm"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
