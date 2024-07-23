import Link from "next/link"
import React from "react"

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-slate-800">
      <h1 className="text-2xl md:text-4xl font-bold text-white text-shadow">
        404 | PAGE NOT FOUND
      </h1>
      <Link
        href="/"
        className="text-white font-medium px-8 py-2 rounded bg-primary hover:shadow-2xl hover:shadow-slate-500 transition-all">
        Kembali
      </Link>
    </div>
  )
}

export default Page
