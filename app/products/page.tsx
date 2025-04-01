import type { Metadata } from "next"
import ProductCard from "@/components/product-card"
import BlogSection from "@/components/blog-section"
import MarkdownContent from "@/components/markdown-content"
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: "Products - FinVest",
  description: "Explore our range of investment products and services",
}

// Read the markdown file
const blogContent = fs.readFileSync(
  path.join(process.cwd(), 'content/blog/investment-tips.md'),
  'utf8'
)

const products = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "Professionally managed investment funds that pool money from multiple investors.",
    icon: "pie-chart",
    content: `
      <h3>What are Mutual Funds?</h3>
      <p>A mutual fund is a type of investment vehicle that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. The goal of a mutual fund is to allow individual investors to access a broad range of investments, even with a relatively small amount of money.</p>
      
      <h3>How it Functions</h3>
      <ul>
        <li><strong>Pooling of Resources:</strong> Investors contribute money to a mutual fund, which is managed by a professional fund manager or a team. The money is pooled together to invest in a variety of assets, which reduces the risk by diversifying the holdings.</li>
        <li><strong>Diversification:</strong> By pooling money together, the fund can invest in a wide array of securities, such as stocks, bonds, or other financial instruments, spreading out the risk and increasing the potential for returns.</li>
        <li><strong>Professional Management:</strong> A fund manager is responsible for making decisions on which assets to buy or sell based on the fund's goals. The manager has the expertise and knowledge to actively manage the fund, though some mutual funds are "passive" and simply track a market index (like the S&P 500).</li>
        <li><strong>Shares of the Fund:</strong> When you invest in a mutual fund, you buy "shares" of the fund. The value of these shares is called the Net Asset Value (NAV), which is calculated at the end of each trading day based on the total value of the fund's holdings.</li>
      </ul>
      
      <h3>Fees</h3>
      <p>Mutual funds charge fees for managing the investments. These can include:</p>
      <ul>
        <li><strong>Expense ratio:</strong> A percentage of the fund's average assets under management, covering administrative and management costs.</li>
        <li><strong>Load fees:</strong> Some mutual funds charge a fee when you buy (front-end load) or sell (back-end load) shares, though no-load funds don't have these fees.</li>
      </ul>
    `,
  },
  {
    id: "equity-funds",
    title: "Equity Funds",
    description: "Funds that invest primarily in stocks, offering higher growth potential with higher risk.",
    icon: "trending-up",
    content: `
      <h3>Objective</h3>
      <p>To generate long-term capital growth by investing primarily in stocks or equities.</p>
      
      <h3>Risk Level</h3>
      <p>High (due to the volatility of the stock market).</p>
      
      <h3>Description</h3>
      <p>These funds invest in a diversified portfolio of stocks. Equity funds may focus on specific sectors, like technology or healthcare, or may invest broadly across the market. Some types include:</p>
      <ul>
        <li><strong>Large-cap funds:</strong> Invest in large, well-established companies.</li>
        <li><strong>Mid-cap and small-cap funds:</strong> Invest in medium or smaller companies that have higher growth potential but come with higher risk.</li>
        <li><strong>Growth funds:</strong> Focus on stocks with high potential for growth, often at the expense of current income (like dividends).</li>
        <li><strong>Value funds:</strong> Invest in undervalued stocks that have strong long-term potential.</li>
      </ul>
    `,
  },
  {
    id: "bond-funds",
    title: "Bond Funds",
    description: "Funds that invest in fixed-income securities, offering stable returns with lower risk.",
    icon: "bar-chart-2",
    content: `
      <h3>Objective</h3>
      <p>To provide regular income through investment in bonds or fixed-income securities.</p>
      
      <h3>Risk Level</h3>
      <p>Moderate to low, depending on the type of bonds in the fund.</p>
      
      <h3>Description</h3>
      <p>These funds invest in government, municipal, corporate, or international bonds. They aim to provide steady income with lower risk than equity funds. Types of bond funds include:</p>
      <ul>
        <li><strong>Government bond funds:</strong> Invest in bonds issued by the government (e.g., U.S. Treasury bonds).</li>
        <li><strong>Corporate bond funds:</strong> Invest in bonds issued by companies, which typically offer higher yields but also carry more risk.</li>
        <li><strong>Municipal bond funds:</strong> Invest in bonds issued by state and local governments, often offering tax-free income.</li>
        <li><strong>High-yield (junk) bond funds:</strong> Invest in lower-rated bonds that offer higher returns but come with higher risk.</li>
      </ul>
    `,
  },
  {
    id: "money-market-funds",
    title: "Money Market Funds",
    description: "Low-risk funds that invest in short-term, high-quality debt instruments.",
    icon: "dollar-sign",
    content: `
      <h3>Objective</h3>
      <p>To provide a safe, liquid, and low-risk investment option, with modest returns.</p>
      
      <h3>Risk Level</h3>
      <p>Very low.</p>
      
      <h3>Description</h3>
      <p>Money market funds invest in short-term, highly liquid, and low-risk instruments, like Treasury bills, certificates of deposit, and commercial paper. These funds are ideal for investors seeking stability and liquidity, but they generally offer lower returns than equity or bond funds.</p>
    `,
  },
  {
    id: "balanced-funds",
    title: "Balanced Funds",
    description: "Hybrid funds that invest in both stocks and bonds to balance growth and income.",
    icon: "activity",
    content: `
      <h3>Objective</h3>
      <p>To provide a mix of income and capital appreciation by investing in both stocks and bonds.</p>
      
      <h3>Risk Level</h3>
      <p>Moderate (since they combine both equities and fixed income).</p>
      
      <h3>Description</h3>
      <p>Balanced funds aim to offer investors a diversified portfolio with both growth potential and income. They typically invest in a mix of equities for growth and bonds for income, adjusting the allocation based on market conditions. These funds may be suitable for investors looking for a balanced risk-return profile.</p>
    `,
  },
  {
    id: "index-funds",
    title: "Index Funds",
    description: "Passive funds that track a market index, offering low-cost, market-matching returns.",
    icon: "target",
    content: `
      <h3>Objective</h3>
      <p>To replicate the performance of a specific market index (e.g., the S&P 500).</p>
      
      <h3>Risk Level</h3>
      <p>Varies based on the underlying index.</p>
      
      <h3>Description</h3>
      <p>Index funds are passively managed funds that track a specific market index rather than trying to outperform it. They typically have lower fees compared to actively managed funds. By investing in index funds, investors gain exposure to a broad section of the market, with the goal of matching, rather than exceeding, the index's returns.</p>
    `,
  },
  {
    id: "international-funds",
    title: "International Funds",
    description: "Funds that invest in foreign markets, offering global diversification.",
    icon: "globe",
    content: `
      <h3>Objective</h3>
      <p>To provide exposure to markets outside the investor's home country.</p>
      
      <h3>Risk Level</h3>
      <p>Moderate to high (due to currency fluctuations and international market risks).</p>
      
      <h3>Description</h3>
      <p>These funds invest in stocks and/or bonds of companies outside the investor's home country. They can be international (focused on specific countries or regions) or global (investing worldwide, including in the investor's home country). Examples include emerging markets funds or developed markets funds.</p>
    `,
  },
  {
    id: "target-date-funds",
    title: "Target Date Funds",
    description: "Funds that automatically adjust asset allocation based on a target retirement date.",
    icon: "calendar",
    content: `
      <h3>Objective</h3>
      <p>To provide a portfolio that automatically adjusts its asset allocation based on the investor's target retirement date.</p>
      
      <h3>Risk Level</h3>
      <p>Varies based on the fund's target date (higher risk in early years, lower risk as the target date approaches).</p>
      
      <h3>Description</h3>
      <p>These funds are designed for retirement planning. They gradually become more conservative as the target date (typically the investor's retirement date) approaches. They typically invest in a mix of stocks, bonds, and cash equivalents, adjusting the asset allocation over time.</p>
    `,
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">Our Investment Products</h1>
          <p className="text-lg text-gray-200 text-center max-w-3xl mx-auto">
            Discover our comprehensive range of investment products designed to help you achieve your financial goals,
            whether you're saving for retirement, education, or wealth creation.
          </p>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Blog Section with Markdown */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Investment Tips</h2>
          <div className="max-w-4xl mx-auto">
            <MarkdownContent content={blogContent} />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Investment Insights</h2>
          <BlogSection />
        </div>
      </section>
    </div>
  )
}

