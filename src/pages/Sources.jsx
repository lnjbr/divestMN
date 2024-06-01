import * as React from "react"
import Sources from '../content/SourcesContent.mdx'

const pageStyles = {
    background: "#F6EEC9",
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const SourcesPage = () => {
    return (
        <main style={pageStyles}>
            <Sources />
        </main>
    )
}
export default SourcesPage
