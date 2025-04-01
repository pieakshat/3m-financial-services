"use client"

import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/contexts/user-context"

interface Message {
    id: string
    text: string
    sender: string
    timestamp: any
    isAdmin: boolean
    userId?: string
}

export default function AdminMessages() {
    const { user, isAdmin } = useUser()
    const router = useRouter()
    const [messages, setMessages] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

    useEffect(() => {
        if (!user) {
            router.push("/signin")
            return
        }

        if (!isAdmin) {
            router.push("/")
            return
        }
    }, [user, isAdmin, router])

    useEffect(() => {
        if (!user || !isAdmin) return

        const q = query(collection(db, "messages"), orderBy("timestamp", "asc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messageList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Message[]
            setMessages(messageList)
        })

        return () => unsubscribe()
    }, [user, isAdmin])

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim() || !selectedUserId || !isAdmin) return

        try {
            await addDoc(collection(db, "messages"), {
                text: newMessage,
                sender: "admin",
                timestamp: serverTimestamp(),
                isAdmin: true,
                userId: selectedUserId,
            })
            setNewMessage("")
        } catch (error) {
            console.error("Error sending message:", error)
        }
    }

    const uniqueUsers = Array.from(new Set(messages.map((msg) => msg.userId).filter(Boolean)))

    if (!user || !isAdmin) {
        return null
    }

    return (
        <div className="container mx-auto py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Admin Chat Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* User List */}
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-4">Users</h3>
                            <ScrollArea className="h-[600px]">
                                <div className="space-y-2">
                                    {uniqueUsers.map((userId) => (
                                        <div
                                            key={userId}
                                            className={`p-2 rounded cursor-pointer ${selectedUserId === userId ? "bg-primary text-white" : "hover:bg-gray-100"}`}
                                            onClick={() => userId && setSelectedUserId(userId)}
                                        >
                                            User {userId?.slice(0, 6)}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Chat Messages */}
                        <div className="md:col-span-2 border rounded-lg p-4">
                            <ScrollArea className="h-[600px] mb-4">
                                <div className="space-y-4">
                                    {messages
                                        .filter((msg) => !selectedUserId || msg.userId === selectedUserId)
                                        .map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.isAdmin ? "justify-end" : "justify-start"}`}
                                            >
                                                <div
                                                    className={`max-w-[80%] rounded-lg p-3 ${message.isAdmin ? "bg-primary text-white" : "bg-gray-100"}`}
                                                >
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <Avatar className="h-6 w-6">
                                                            <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                                            <AvatarFallback>
                                                                {message.isAdmin ? "AD" : "US"}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-xs">
                                                            {message.isAdmin ? "Admin" : `User ${message.userId?.slice(0, 6)}`}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm">{message.text}</p>
                                                    <p className="text-xs mt-1 opacity-70">
                                                        {message.timestamp?.toDate().toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </ScrollArea>

                            {/* Message Input */}
                            <form onSubmit={handleSendMessage} className="flex space-x-2">
                                <Input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    disabled={!selectedUserId}
                                />
                                <Button type="submit" disabled={!selectedUserId}>
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 