"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <div
      className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/55"
      aria-label="Site navigation"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Image src="/placeholder-logo.png" alt="Cantiina logo" width={24} height={24} className="rounded" priority />
          <span className="font-semibold tracking-tight">Cantiina</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Button asChild size="sm">
            <a href="#pricing" aria-label="Get Started">
              Get Started
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button asChild size="sm" variant="secondary">
            <a href="#pricing" aria-label="Get Started">
              Get Started
            </a>
          </Button>
        </div>
      </nav>
    </div>
  )
}
