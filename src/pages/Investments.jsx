import * as React from "react"
import Investments from '../content/InvestmentsContent.mdx'

const pageStyles = {
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 600,
}

const InvestmentsPage = () => {
    return (
        <main style={pageStyles}>
            <Investments />
        </main>
    )
}
export default InvestmentsPage
