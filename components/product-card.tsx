"use client"

import { useState } from "react"
import Link from "next/link"
import {
  PieChart,
  TrendingUp,
  BarChart2,
  DollarSign,
  Activity,
  Target,
  Globe,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: string
    title: string
    description: string
    icon: string
    content: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "pie-chart":
        return <PieChart className="h-6 w-6" />
      case "trending-up":
        return <TrendingUp className="h-6 w-6" />
      case "bar-chart-2":
        return <BarChart2 className="h-6 w-6" />
      case "dollar-sign":
        return <DollarSign className="h-6 w-6" />
      case "activity":
        return <Activity className="h-6 w-6" />
      case "target":
        return <Target className="h-6 w-6" />
      case "globe":
        return <Globe className="h-6 w-6" />
      case "calendar":
        return <Calendar className="h-6 w-6" />
      default:
        return <PieChart className="h-6 w-6" />
    }
  }

  return (
    <Card className={cn("transition-all duration-300 overflow-hidden", isExpanded ? "shadow-lg" : "hover:shadow-md")}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-full text-primary">{getIcon(product.icon)}</div>
            <CardTitle>{product.title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
        <CardDescription className="pt-3">{product.description}</CardDescription>
      </CardHeader>

      <div
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <CardContent>
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.content }} />
        </CardContent>
        <CardFooter className="pt-0 pb-4">
          <Link href={`/products/${product.id}`}>
            <Button variant="outline">Learn More</Button>
          </Link>
        </CardFooter>
      </div>

      {!isExpanded && (
        <CardFooter className="pt-0 pb-4">
          <Button variant="ghost" className="text-primary" onClick={() => setIsExpanded(true)}>
            Read More <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

