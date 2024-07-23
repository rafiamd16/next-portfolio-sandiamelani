"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full flex items-center fixed top-0 left-0 z-[9999] bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 navbar">
      <div className="container">
        <div className="relative flex justify-between items-center">
          <Link href={"/"} className="text-lg font-bold text-primary py-6 px-4">
            sandiamelani
          </Link>

          <div className="flex items-center px-4">
            <button
              ref={buttonRef}
              type="button"
              onClick={toggleNavbar}
              className={`absolute right-4 block lg:hidden ${
                isOpen ? "hamburger-active" : ""
              }`}>
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              ref={navRef}
              className={`absolute left-0 right-0  lg:scale-y-100 top-full w-full max-w-full rounded-lg py-5 bg-dark shadow-md z-20 shadow-primary lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none transition-transform origin-top ${
                isOpen ? "scale-y-100" : "scale-y-0"
              } `}>
              <ul className="block lg:flex">
                <li className="group flex">
                  <Link
                    className={`py-2 flex text-base mx-auto text-white font-medium group-hover:text-primary transition-all navigasi lg:mx-5 ${
                      pathname === "/" ? "active" : ""
                    }`}
                    href={"/"}>
                    Home
                  </Link>
                </li>
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-primary transition-all navigasi lg:mx-5 ${
                      pathname === "/about" ? "active" : ""
                    }`}
                    href={"/about"}>
                    About
                  </Link>
                </li>
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-primary transition-all navigasi lg:mx-5 ${
                      pathname === "/portfolio" ? "active" : ""
                    }`}
                    href={"/portfolio"}>
                    Portfolio
                  </Link>
                </li>
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-primary transition-all navigasi lg:mx-5 ${
                      pathname === "/gallery" ? "active" : ""
                    }`}
                    href={"/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li className="group flex">
                  <Link
                    className={`py-2 mx-auto flex text-base text-white font-medium group-hover:text-primary transition-all navigasi lg:mx-5 ${
                      pathname === "/contact" ? "active" : ""
                    }`}
                    href={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
