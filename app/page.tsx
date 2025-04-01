import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import InvestmentDropdown from "@/components/investment-dropdown"
import AnimatedCounter from "@/components/animated-counter"
import ChatBox from "@/components/chat-box"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Invest smarter, <br />
              <span className="text-primary">grow faster</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Your trusted partner for equity and mutual fund investments. Start your investment journey today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Investment Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Investment Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Investment Options</h2>
          <InvestmentDropdown />

          <div className="mt-16 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 mb-2">Total Mutual Funds Invested</p>
              <AnimatedCounter endValue={5000} prefix="₹" suffix="Cr+" className="text-4xl font-bold text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Office Photos Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Workspace</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=Office Photo ${i}`}
                alt={`Office Photo ${i}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Chat Box */}
      <ChatBox />
    </main>
  )
}

