import * as React from "react"
import Investments from '../content/InvestmentsContent.mdx'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const InvestmentsPage = () => {
    return (
        <main style={pageStyles}>
            <Investments />
        </main>
    )
}
export default InvestmentsPage
