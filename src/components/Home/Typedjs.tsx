"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

const Typedjs = () => {
  const el = useRef(null)

  useEffect(() => {
    const options = {
      strings: ["andia Melani"],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      showCursor: true,
    }
    const typed = new Typed(el.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <span className="mt-1 block text-4xl font-bold text-white lg:text-5xl text-shadow">
        S<span ref={el}></span>
      </span>
    </>
  )
}

export default Typedjs
