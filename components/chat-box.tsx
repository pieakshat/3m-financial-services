"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

interface Message {
  id: string
  text: string
  sender: string
  timestamp: any
  isAdmin: boolean
  userId?: string
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) return

    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[]
      setMessages(messageList)
    })

    return () => unsubscribe()
  }, [user])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !user) return

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        sender: "user",
        timestamp: serverTimestamp(),
        isAdmin: false,
        userId: user.uid,
      })
      setNewMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
    }
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
              <div key={message.id} className={`flex ${message.isAdmin ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${message.isAdmin ? "bg-gray-100 text-gray-800" : "bg-primary text-white"
                    }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp?.toDate().toLocaleTimeString([], {
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
                disabled={!user}
              />
              <Button type="submit" size="icon" disabled={!user}>
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

