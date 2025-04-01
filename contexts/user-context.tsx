"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { User } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

interface UserContextType {
    user: User | null
    isAdmin: boolean
    loading: boolean
}

const UserContext = createContext<UserContextType>({
    user: null,
    isAdmin: false,
    loading: true,
})

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setUser(user)
            if (user) {
                // Check if user is admin
                const userDoc = await getDoc(doc(db, "users", user.uid))
                setIsAdmin(userDoc.data()?.isAdmin || false)
            } else {
                setIsAdmin(false)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={{ user, isAdmin, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext) 