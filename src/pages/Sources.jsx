import * as React from "react"
import Sources from '../content/SourcesContent.mdx'

const pageStyles = {
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 600,
}

const SourcesPage = () => {
    return (
        <main style={pageStyles}>
            <Sources />
        </main>
    )
}
export default SourcesPage
