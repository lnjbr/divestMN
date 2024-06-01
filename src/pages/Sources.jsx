import * as React from "react"
import Sources from '../content/SourcesContent.mdx'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const SourcesPage = () => {
    return (
        <main style={pageStyles}>
            <Sources />
        </main>
    )
}
export default SourcesPage
