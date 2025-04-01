import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - FinVest",
  description: "Learn about FinVest, our mission, values, and team",
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">About FinVest</h1>
          <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto">
            Your trusted partner for equity and mutual fund investments. We're committed to helping you achieve your
            financial goals through smart, personalized investment solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, FinVest began with a simple mission: to make investing accessible, transparent, and
              rewarding for everyone. What started as a small team of financial experts has grown into a trusted
              investment platform serving thousands of clients across the country.
            </p>
            <p className="text-gray-700 mb-4">
              Our founders recognized that traditional investment services were often complex, expensive, and
              inaccessible to the average person. They set out to create a solution that would democratize investing and
              empower individuals to take control of their financial future.
            </p>
            <p className="text-gray-700">
              Today, FinVest continues to innovate and expand our offerings while staying true to our core values of
              transparency, accessibility, and client-first service.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border-2 border-primary">
            <Image
              src="/placeholder.svg?height=800&width=600&text=Our Story"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Transparency</h3>
              <p className="text-gray-700">
                We believe in complete transparency in all our operations. From fee structures to investment strategies,
                we ensure our clients have all the information they need to make informed decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Security</h3>
              <p className="text-gray-700">
                Your investments and personal information are protected by state-of-the-art security measures. We employ
                the latest encryption technologies and follow industry best practices to ensure your data remains
                secure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Client-First</h3>
              <p className="text-gray-700">
                Our clients are at the heart of everything we do. We're committed to providing personalized service,
                understanding your unique financial goals, and helping you achieve them through tailored investment
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Vikram Mehta", title: "Founder & CEO", image: "/placeholder.svg?height=300&width=300&text=VM" },
            {
              name: "Priya Sharma",
              title: "Chief Investment Officer",
              image: "/placeholder.svg?height=300&width=300&text=PS",
            },
            { name: "Rahul Kapoor", title: "Head of Research", image: "/placeholder.svg?height=300&width=300&text=RK" },
            {
              name: "Ananya Patel",
              title: "Chief Technology Officer",
              image: "/placeholder.svg?height=300&width=300&text=AP",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center border-2 border-primary">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-black">{member.name}</h3>
                <p className="text-gray-700">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

