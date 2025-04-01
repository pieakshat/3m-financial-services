"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const equityCategories = [
  { id: "large-cap", name: "Large Cap" },
  { id: "mid-cap", name: "Mid Cap" },
  { id: "small-cap", name: "Small Cap" },
  { id: "multi-cap", name: "Multi Cap" },
  { id: "value", name: "Value" },
  { id: "growth", name: "Growth" },
]

const mutualFundCategories = [
  { id: "equity", name: "Equity Funds" },
  { id: "debt", name: "Debt Funds" },
  { id: "hybrid", name: "Hybrid Funds" },
  { id: "solution-oriented", name: "Solution Oriented Funds" },
  { id: "index", name: "Index Funds" },
  { id: "etf", name: "ETFs" },
]

export default function InvestmentDropdown() {
  const [selectedEquity, setSelectedEquity] = useState("")
  const [selectedMutualFund, setSelectedMutualFund] = useState("")

  return (
    <Tabs defaultValue="mutual-funds" className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="equity">Equity</TabsTrigger>
        <TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
      </TabsList>

      <TabsContent value="equity">
        <Card>
          <CardHeader>
            <CardTitle>Equity Investments</CardTitle>
            <CardDescription>
              Explore various equity investment options across different market segments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select value={selectedEquity} onValueChange={setSelectedEquity}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select equity category" />
                </SelectTrigger>
                <SelectContent>
                  {equityCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedEquity && (
                <div className="p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium mb-2">{equityCategories.find((c) => c.id === selectedEquity)?.name}</h4>
                  <p className="text-sm text-gray-600">
                    Information about {equityCategories.find((c) => c.id === selectedEquity)?.name} investments and
                    available options.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="mutual-funds">
        <Card>
          <CardHeader>
            <CardTitle>Mutual Fund Investments</CardTitle>
            <CardDescription>Discover a wide range of mutual fund options to diversify your portfolio.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select value={selectedMutualFund} onValueChange={setSelectedMutualFund}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select mutual fund category" />
                </SelectTrigger>
                <SelectContent>
                  {mutualFundCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedMutualFund && (
                <div className="p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium mb-2">
                    {mutualFundCategories.find((c) => c.id === selectedMutualFund)?.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Information about {mutualFundCategories.find((c) => c.id === selectedMutualFund)?.name} and
                    available investment options.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

