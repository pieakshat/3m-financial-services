"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you with your investment journey today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. One of our investment consultants will get back to you shortly.",
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prevMessages) => [...prevMessages, agentMessage])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-96 border border-gray-200">
          <div className="p-4 bg-primary text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Agent" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">Investment Consultant</h3>
                <p className="text-xs text-primary-foreground/80">Online</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-primary/90">
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button onClick={toggleChat} className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}
    </div>
  )
}

