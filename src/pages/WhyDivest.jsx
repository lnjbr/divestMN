import * as React from "react"
import WhyDivest from '../content/WhyDivestContent.mdx'

const pageStyles = {
    background: "#F6EEC9",
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const WhyDivestPage = () => {
    return (
        <main style={pageStyles}>
            <WhyDivest />
        </main>
    )
}
export default WhyDivestPage
