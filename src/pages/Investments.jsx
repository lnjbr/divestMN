import * as React from "react"
import Investments from '../content/InvestmentsContent.mdx'

const pageStyles = {
    background: "#F6EEC9",
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const InvestmentsPage = () => {
    return (
        <main style={pageStyles}>
            <Investments />
        </main>
    )
}
export default InvestmentsPage
