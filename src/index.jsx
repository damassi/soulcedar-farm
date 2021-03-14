import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import { ThemeProvider } from "styled-components"

import { Layout } from "./components/Layout"

import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { ContactUs } from "./routes/ContactUs"
import { WhereToFindUs } from "./routes/WhereToFindUs"

import { GlobalStyle } from "./GlobalStyles"
import { Transition } from "./components/Transition"
import { theme } from "./theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Transition>
        <GlobalStyle />

        <Router primary={false}>
          <Layout path="/">
            <Home path="/" />
            <About path="/about" />
            <WhereToFindUs path="/where-to-find-us" />
            <ContactUs path="/contact-us" />
          </Layout>
        </Router>
      </Transition>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
