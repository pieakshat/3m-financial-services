"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useUser } from "@/contexts/user-context"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function Navbar() {
  const { user, isAdmin } = useUser()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-black">
            FinVest
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-black">
              About
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-black">
              Products
            </Link>
            {isAdmin && (
              <Link href="/admin/messages" className="text-gray-600 hover:text-black">
                Admin
              </Link>
            )}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.displayName}</span>
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

