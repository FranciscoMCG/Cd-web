import React from "react"
import { ThemeProvider } from "styled-components"

import Navbar from "../components/Navbar"
import { theme } from "../config/theme"
import SEO from "../components/seo"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar />
    </React.Fragment>
  </ThemeProvider>
)

export default IndexPage
