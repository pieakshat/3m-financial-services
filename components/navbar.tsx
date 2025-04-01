"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image src="/placeholder.svg?height=32&width=32&text=Logo" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900">FinVest</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-primary transition">
              About
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-primary transition">
              Products
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-primary transition">
              Support
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/support"
              className="text-gray-600 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Link href="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

