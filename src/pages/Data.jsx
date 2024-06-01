import * as React from "react"
import Data from '../content/DataContent.mdx'

const pageStyles = {
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 600,
}

const DataPage = () => {
    return (
        <main style={pageStyles}>
            <Data />
        </main>
    )
}
export default DataPage
