"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// Sample blog posts data (in a real app, this would come from markdown files)
const blogPosts = [
  {
    id: "understanding-mutual-funds",
    title: "Understanding Mutual Funds: A Beginner's Guide",
    excerpt:
      "Learn the basics of mutual funds, how they work, and why they're a popular investment choice for beginners and experienced investors alike.",
    date: "April 15, 2023",
    author: "Priya Sharma",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400&text=Mutual Funds",
    content: `
# Understanding Mutual Funds: A Beginner's Guide

Mutual funds are one of the most popular investment vehicles for both beginners and experienced investors. They offer a way to invest in a diversified portfolio of securities without having to pick individual stocks or bonds.

## What is a Mutual Fund?

A mutual fund is an investment vehicle that pools money from many investors to purchase a portfolio of stocks, bonds, or other securities. Professional fund managers manage this pool of money, making investment decisions on behalf of the investors.

## How Do Mutual Funds Work?

When you invest in a mutual fund, you're buying shares of the fund. The value of these shares, known as the Net Asset Value (NAV), is calculated at the end of each trading day by dividing the total value of all the securities in the fund by the number of outstanding shares.

## Types of Mutual Funds

There are several types of mutual funds, each with different investment objectives:

1. **Equity Funds**: Invest primarily in stocks
2. **Debt Funds**: Invest in fixed-income securities like bonds
3. **Balanced Funds**: Invest in both stocks and bonds
4. **Index Funds**: Track a specific market index
5. **Sector Funds**: Focus on a specific industry sector

## Benefits of Investing in Mutual Funds

- **Diversification**: Spreading investments across multiple securities reduces risk
- **Professional Management**: Experienced fund managers make investment decisions
- **Liquidity**: Ability to buy or sell shares on any business day
- **Affordability**: Start investing with relatively small amounts
- **Convenience**: Easy to buy, track, and manage

## How to Choose the Right Mutual Fund

When selecting a mutual fund, consider:

- Your financial goals
- Investment time horizon
- Risk tolerance
- Expense ratio
- Fund performance history
- Fund manager's experience

## Getting Started

To start investing in mutual funds, you can:

1. Open an account with a mutual fund company
2. Invest through a broker
3. Use an online investment platform

Remember to read the fund's prospectus carefully before investing and consider consulting with a financial advisor.
    `,
  },
  {
    id: "investment-strategies-for-2023",
    title: "Investment Strategies for 2023: Navigating Market Uncertainty",
    excerpt:
      "Discover effective investment strategies to navigate market volatility and uncertainty in the current economic climate.",
    date: "March 22, 2023",
    author: "Rajiv Mehta",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=Investment Strategies",
    content: `
# Investment Strategies for 2023: Navigating Market Uncertainty

With ongoing economic challenges, geopolitical tensions, and market volatility, developing a sound investment strategy is more important than ever. Here are some approaches to consider for your portfolio in 2023.

## Diversification Remains Key

In uncertain times, spreading your investments across different asset classes, sectors, and geographies can help manage risk. Consider:

- A mix of domestic and international investments
- Exposure to different sectors and industries
- Alternative investments like real estate or commodities
- Both growth and value stocks

## Focus on Quality

Companies with strong balance sheets, stable cash flows, and competitive advantages tend to weather economic storms better. Look for:

- Low debt levels
- Consistent revenue growth
- Strong profit margins
- Sustainable competitive advantages

## Consider Defensive Sectors

Some sectors typically perform better during economic downturns:

- Consumer staples
- Healthcare
- Utilities
- Telecommunications

These sectors provide essential products and services that people need regardless of economic conditions.

## Income-Generating Investments

With interest rates rising, income-generating investments are becoming more attractive:

- Dividend-paying stocks
- Corporate bonds
- Government securities
- REITs (Real Estate Investment Trusts)

## Dollar-Cost Averaging

Rather than trying to time the market, consider investing a fixed amount regularly. This strategy:

- Reduces the impact of volatility
- Removes emotional decision-making
- Builds discipline in your investment approach

## Stay Liquid

Maintaining an emergency fund and some liquid investments is crucial during uncertain times:

- 3-6 months of expenses in cash or cash equivalents
- Short-term bond funds
- Money market funds

## Long-Term Perspective

Despite short-term volatility, maintaining a long-term perspective is essential:

- Avoid panic selling during market downturns
- Stay focused on your financial goals
- Rebalance your portfolio periodically

Remember that market timing is difficult even for professionals. A well-thought-out strategy aligned with your goals and risk tolerance is your best approach to navigating uncertainty.
    `,
  },
  {
    id: "tax-efficient-investing",
    title: "Tax-Efficient Investing: Maximizing Your Returns",
    excerpt:
      "Learn how to structure your investments to minimize tax liability and maximize after-tax returns through smart tax planning strategies.",
    date: "February 8, 2023",
    author: "Ananya Patel",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=Tax Planning",
    content: `
# Tax-Efficient Investing: Maximizing Your Returns

One of the most overlooked aspects of investing is tax efficiency. Smart tax planning can significantly impact your overall returns. Here's how to make your investment strategy more tax-efficient.

## Understanding Tax Impact on Investments

Different investments are taxed differently:

- Equity investments held for more than one year qualify for long-term capital gains tax
- Interest from debt investments is typically taxed at your income tax rate
- Dividends may have preferential tax treatment depending on the type

## Tax-Advantaged Accounts

Utilize tax-advantaged accounts to shelter investments from immediate taxation:

- Employer-sponsored retirement plans
- Public Provident Fund (PPF)
- National Pension System (NPS)
- Equity Linked Savings Scheme (ELSS)

## Asset Location Strategy

Place investments in accounts where they'll receive the most favorable tax treatment:

- Hold tax-inefficient investments (like bonds) in tax-advantaged accounts
- Keep tax-efficient investments (like long-term equity) in taxable accounts
- Consider municipal bonds for tax-free income in taxable accounts

## Tax-Loss Harvesting

Strategically sell investments at a loss to offset capital gains:

- Offset short-term gains with short-term losses
- Offset long-term gains with long-term losses
- Carry forward excess losses to future tax years

## Holding Period Considerations

The length of time you hold an investment affects its tax treatment:

- Hold equity investments for more than one year to qualify for lower long-term capital gains rates
- Consider the ex-dividend date when buying dividend-paying stocks
- Time your mutual fund purchases to avoid buying just before distributions

## Tax-Efficient Withdrawal Strategies

When withdrawing from your investments, consider:

- Which accounts to draw from first
- How to manage your tax bracket
- Required minimum distributions (if applicable)
- The impact on other income-based considerations

## Working with Professionals

Consider working with:

- A tax advisor who understands investments
- A financial planner who incorporates tax planning
- An investment advisor who considers tax implications

Remember that while tax efficiency is important, it shouldn't be the only factor driving your investment decisions. Your overall financial goals, risk tolerance, and time horizon should remain primary considerations.
    `,
  },
]

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Simulate loading of markdown files
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Skeleton className="h-full w-full" />
            </div>
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-28" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost)
    if (!post) return null

    return (
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => setSelectedPost(null)}>
          ← Back to all posts
        </Button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="prose max-w-none">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-6 mb-4">
                      {line.substring(2)}
                    </h1>
                  )
                } else if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {line.substring(3)}
                    </h2>
                  )
                } else if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-5 mb-2">
                      {line.substring(4)}
                    </h3>
                  )
                } else if (line.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 mb-1">
                      {line.substring(2)}
                    </li>
                  )
                } else if (
                  line.startsWith("1. ") ||
                  line.startsWith("2. ") ||
                  line.startsWith("3. ") ||
                  line.startsWith("4. ") ||
                  line.startsWith("5. ") ||
                  line.startsWith("6. ")
                ) {
                  return (
                    <li key={index} className="ml-6 mb-1 list-decimal">
                      {line.substring(3)}
                    </li>
                  )
                } else if (line.trim() === "") {
                  return <br key={index} />
                } else {
                  return (
                    <p key={index} className="mb-4">
                      {line}
                    </p>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="flex items-center text-xs">
              <span>{post.date}</span>
              <span className="mx-1">•</span>
              <span>{post.readTime}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => setSelectedPost(post.id)}>
              Read Article
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

