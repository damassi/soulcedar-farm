import React from "react"
import { Location } from "@reach/router"

export const Transition = ({ children }) => {
  return (
    // Location is automatically triggered when the route changes, and when it
    // does, move the browser scroll position to the top.
    <Location>
      {() => {
        window.scrollTo(0, 0)
        return children
      }}
    </Location>
  )
}
