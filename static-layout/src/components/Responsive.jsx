import React from "react"
import Media from "react-media"
import { breakpoints } from "../theme"

export const Mobile = ({ children }) => {
  return <MediaWrapper target="mobile">{children}</MediaWrapper>
}

export const Desktop = ({ children }) => {
  return <MediaWrapper target="desktop">{children}</MediaWrapper>
}

const MediaWrapper = ({ target, children }) => {
  return (
    <Media query={{ maxWidth: breakpoints.sm }}>
      {mobile => {
        switch (target) {
          case "mobile":
            return mobile ? children : null
          // Desktop
          default:
            return mobile ? null : children
        }
      }}
    </Media>
  )
}

export const RenderIf = ({ greaterThan, children }) => {
  return (
    <Media query={{ minWidth: greaterThan }}>
      {match => {
        if (match) {
          return children
        } else {
          return null
        }
      }}
    </Media>
  )
}
