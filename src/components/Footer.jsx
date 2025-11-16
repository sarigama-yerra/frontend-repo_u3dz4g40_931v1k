import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
            <span className="text-sm font-semibold">azen</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Azen Digital. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
