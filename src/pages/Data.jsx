import * as React from "react"
import Data from '../content/DataContent.mdx'

const pageStyles = {
    background: "#F6EEC9",
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const DataPage = () => {
    return (
        <main style={pageStyles}>
            <Data />
        </main>
    )
}
export default DataPage
