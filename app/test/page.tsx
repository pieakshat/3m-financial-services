"use client"

export default function TestPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Environment Variables Test</h1>
            <div className="space-y-2">
                <p>API Key: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY}</p>
                <p>Auth Domain: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}</p>
                <p>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</p>
                <p>Storage Bucket: {process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}</p>
                <p>Messaging Sender ID: {process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}</p>
                <p>App ID: {process.env.NEXT_PUBLIC_FIREBASE_APP_ID}</p>
            </div>
        </div>
    )
} 