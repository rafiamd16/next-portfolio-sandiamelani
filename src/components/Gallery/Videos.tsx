"use client"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const Videos = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section className="pt-36 pb-32">
      <div className="container">
        <div className="w-full pt-[200%] md:pt-[100%] custom-shadow relative">
          <ReactPlayer
            className="absolute w-full h-full top-0 left-0"
            url="/videos/v1.mp4"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </section>
  )
}

export default Videos
