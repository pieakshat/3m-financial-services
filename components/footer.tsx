import Link from "next/link"
import { Briefcase, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">FinVest</h3>
            <p className="text-gray-600 text-sm">Your trusted partner for equity and mutual fund investments.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="inline-flex items-center text-gray-600 hover:text-primary transition text-sm"
                >
                  <Briefcase className="h-4 w-4 mr-1" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/equity" className="text-gray-600 hover:text-primary transition text-sm">
                  Equity
                </Link>
              </li>
              <li>
                <Link href="/products/mutual-funds" className="text-gray-600 hover:text-primary transition text-sm">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/products/fixed-income" className="text-gray-600 hover:text-primary transition text-sm">
                  Fixed Income
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support/faq" className="text-gray-600 hover:text-primary transition text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support/help" className="text-gray-600 hover:text-primary transition text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/resources" className="text-gray-600 hover:text-primary transition text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} FinVest. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

