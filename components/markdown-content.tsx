import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'

interface MarkdownContentProps {
    content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-black prose-strong:text-black prose-ul:text-black prose-li:text-black prose-ol:text-black">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
} 