import React from "react"
import Navbar from "../navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="w-[390px] container  mx-auto sm:w-[1512px] sm:mx-auto">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
