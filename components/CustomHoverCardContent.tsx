// components/CustomHoverCardContent.tsx

import { HoverCardContent } from "@/components/ui/hover-card"
import { ExternalLink } from "lucide-react"
import { ReactNode } from "react"

type CustomHoverCardContentProps = {
  logo: ReactNode        // Icon component like <FaLinkedin />
  title: string          // e.g., "@UBSIndiaHackathon"
  description: string    // e.g., "Runner-up..."
  linkUrl: string        // full LinkedIn or any other link
  date?: string          // Optional: e.g., "Posted December 2023"
}

export const CustomHoverCardContent = ({
  logo,
  title,
  description,
  linkUrl,
  date
}: CustomHoverCardContentProps) => {
  return (
    <HoverCardContent className="w-80 bg-neutral-900 text-white rounded-lg border border-gray-700 p-4 shadow-xl">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="mt-1">{logo}</div>

        {/* Text Content */}
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-300 mt-1">{description}</p>

          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-blue-400 hover:underline text-sm"
          >
            View Post <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          {date && <p className="text-xs text-gray-500 mt-1">{date}</p>}
        </div>
      </div>
    </HoverCardContent>
  )
}
