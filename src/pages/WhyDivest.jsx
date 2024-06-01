import * as React from "react"
import WhyDivest from '../content/WhyDivestContent.mdx'

const pageStyles = {
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 600,
}

const WhyDivestPage = () => {
    return (
        <main style={pageStyles}>
            <WhyDivest />
        </main>
    )
}
export default WhyDivestPage
