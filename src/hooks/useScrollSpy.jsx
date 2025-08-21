"use client"

import { useState, useEffect } from "react"

export const useScrollSpy = (elementIds, offset = 0) => {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (const id of elementIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [elementIds, offset])

  return activeId
}
