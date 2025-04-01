import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhoneCall, Mail, MessageSquare, FileText, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Support - FinVest",
  description: "Get help with your FinVest account and investments",
}

export default function SupportPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">How Can We Help You?</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our support team is here to assist you with any questions or concerns about your investments.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Input type="text" placeholder="Search for help topics..." className="pr-10 py-6" />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0" variant="ghost">
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <PhoneCall className="h-6 w-6" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <CardDescription>Speak directly with our support team</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-medium text-primary">1800-123-4567</p>
              <p className="text-sm text-gray-500 mt-2">Monday to Friday: 9 AM - 6 PM</p>
              <p className="text-sm text-gray-500">Saturday: 10 AM - 2 PM</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Request Callback</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle>Email Us</CardTitle>
              <CardDescription>Send us your queries anytime</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-medium text-primary">support@finvest.com</p>
              <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Compose Email</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team in real-time</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500 mt-2">Available 24/7 for your convenience</p>
              <p className="text-sm text-gray-500">Average response time: 2 minutes</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>Start Chat</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Tabs defaultValue="account" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    To create an account, click on the "Sign Up" button in the top right corner of our website. You'll
                    need to provide your email address or phone number, create a password, and complete the verification
                    process. Once verified, you can start setting up your investment profile.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    If you've forgotten your password, click on the "Sign In" button, then select "Forgot password?"
                    link. Enter your registered email address or phone number, and we'll send you instructions to reset
                    your password. For security reasons, password reset links expire after 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I update my personal information?</AccordionTrigger>
                  <AccordionContent>
                    You can update your personal information by logging into your account and navigating to the
                    "Profile" or "Account Settings" section. From there, you can edit your contact details, address, and
                    other personal information. Some changes may require additional verification for security purposes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I have multiple accounts?</AccordionTrigger>
                  <AccordionContent>
                    No, our policy allows only one account per individual. This helps us maintain security and comply
                    with regulatory requirements. If you need to manage investments for different purposes, you can
                    create different portfolios within your single account.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="investments" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I start investing?</AccordionTrigger>
                  <AccordionContent>
                    To start investing, first complete your KYC verification in the "Profile" section. Then, navigate to
                    the "Investments" tab and select the type of investment you're interested in. You can choose from
                    mutual funds, equity, or other available options. Follow the guided process to make your first
                    investment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the minimum investment amount?</AccordionTrigger>
                  <AccordionContent>
                    The minimum investment amount varies by product. For most mutual funds, you can start with as little
                    as ₹500. For equity investments, the minimum depends on the current share price. SIPs (Systematic
                    Investment Plans) can be started with as little as ₹100 per month for select funds.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I track my investments?</AccordionTrigger>
                  <AccordionContent>
                    You can track your investments through the "Dashboard" section of your account. Here, you'll find a
                    comprehensive overview of your portfolio performance, including current value, returns, asset
                    allocation, and transaction history. We also provide detailed reports and analytics to help you
                    understand your investment performance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I withdraw my investments?</AccordionTrigger>
                  <AccordionContent>
                    To withdraw your investments, go to the specific investment in your portfolio and select the
                    "Redeem" or "Sell" option. Follow the instructions to specify the amount you wish to withdraw. The
                    proceeds will be credited to your registered bank account within 2-3 business days, depending on the
                    type of investment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="payments" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                  <AccordionContent>
                    We accept various payment methods including net banking, UPI, debit cards, credit cards, and
                    NEFT/RTGS transfers. All payments are processed through secure payment gateways to ensure the safety
                    of your transactions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long do transfers take to process?</AccordionTrigger>
                  <AccordionContent>
                    Most electronic payments (net banking, UPI, cards) are processed instantly. NEFT/RTGS transfers
                    typically take 1-2 business days to reflect in your investment account. Once the payment is
                    confirmed, your investment order is processed based on the applicable NAV or market price.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any transaction fees?</AccordionTrigger>
                  <AccordionContent>
                    We do not charge any transaction fees for making investments. However, your bank or payment provider
                    might charge a nominal fee for certain payment methods. For mutual funds, the applicable expense
                    ratio is as disclosed in the fund documents. For equity investments, standard brokerage fees apply.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I add or change my bank account?</AccordionTrigger>
                  <AccordionContent>
                    To add or change your bank account, go to the "Profile" section and select "Bank Accounts." You can
                    add a new bank account by providing the account details and completing the verification process,
                    which may include submitting a cancelled cheque or bank statement. For security reasons, redemption
                    proceeds can only be credited to verified bank accounts.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How secure is my data?</AccordionTrigger>
                  <AccordionContent>
                    We take data security very seriously. All your personal and financial information is encrypted using
                    industry-standard SSL/TLS protocols. We implement multiple layers of security, including firewalls,
                    intrusion detection systems, and regular security audits. Your data is stored in secure servers with
                    restricted access.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I enable two-factor authentication?</AccordionTrigger>
                  <AccordionContent>
                    To enable two-factor authentication (2FA), go to "Account Settings" and select "Security." Choose
                    your preferred 2FA method (SMS, email, or authenticator app) and follow the setup instructions. Once
                    enabled, you'll need to provide a verification code in addition to your password when signing in,
                    adding an extra layer of security.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What should I do if I notice suspicious activity?</AccordionTrigger>
                  <AccordionContent>
                    If you notice any suspicious activity on your account, immediately change your password and contact
                    our support team at 1800-123-4567 or security@finvest.com. We recommend enabling notifications for
                    all account activities so you can be promptly alerted of any unauthorized actions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Are my investments insured?</AccordionTrigger>
                  <AccordionContent>
                    Your investments are held in your name and are subject to market risks. While the investments
                    themselves are not insured against market fluctuations, we maintain investor protection insurance
                    that safeguards against operational risks, fraud, or default by the company. Additionally, we are
                    registered with SEBI and follow all regulatory guidelines to ensure the safety of your investments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Button>
              <HelpCircle className="mr-2 h-4 w-4" />
              Browse All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle>User Guides</CardTitle>
              <CardDescription>Step-by-step guides to help you navigate our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    How to Create an Investment Plan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Understanding Your Portfolio Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Mobile App User Guide
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>Watch and learn with our educational videos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Introduction to Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    How to Analyze Fund Performance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Setting Up SIPs for Long-term Growth
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Tax Planning with Investments
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>In-depth articles on investment topics</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Understanding Market Volatility
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Asset Allocation Strategies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Retirement Planning Essentials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Investment Glossary
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

