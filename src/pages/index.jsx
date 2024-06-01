import * as React from "react"
import Layout from "../content/layout"

const pageStyles = {
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 600,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 600,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
  fontStyle: "italic",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const AWCLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const AWCLink = {
  text: "Anti-War Committee",
  url: "https://linktr.ee/antiwarmn",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "What is the State Board of Investment?",
    url: "/SBI",
    description:
      "The government body composed of Tim Walz, Julie Blaha, Steve Simon, Keith Ellison that invests Minnesota's state pensions and retirement funds.",
    color: "#E95800",
  },
  {
    text: "Where do these investments go?",
    url: "/Investments",
    description:
      "In 2023, the SBI invested over three billion dollars in entities that are either complicit in, or benefit from, the Israeli occupation. These investments include weapons manufacturing companies, pharmaceutical companies, the tourism industry, heavy machinery, and all the way down to investments into the state of Israel directly.",
    color: "#1099A8",
  },
  {
    text: "Why Divest",
    url: "/WhyDivest",
    description:
      "Divestment is a political act. It demands that we break the ties between the US and Israel. ",
    color: "#BC027F",
  },
  {
    text: "What can you do?",
    url: "/WhatCanYouDo",
    description:
      "Change requires collective action. Your voice, your opinion, and your direct action matters.",
    color: "#0D96F2",
  },
  {
    text: "Data",
    url: "/Data",
    description:
      "All investments in corporations profiting from Israel's illegal occupation of Palestine",
    color: "#8EB814",
  },
  {
    text: "Sources",
    url: "/Sources",
    badge: true,
    description:
      "How we got our numbers and how you can start your own divestment campaign.",
    color: "#663399",
  },
]

const IndexPage= () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        DIVEST MINNESOTA FROM APARTHEID ISRAEL
        <br />
      </h1> 
      <p style={paragraphStyles}>
        <code style={codeStyles}>NO MORE MONEY FOR ISRAEL'S CRIMES</code>
      </p>
      <ul style={listStyles}>
        <li style={AWCLinkStyle}>
          <a
            style={linkStyle}
            href={`${AWCLink.url}`}
          >
            {AWCLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
