import * as React from "react"
import Sbi from '../content/SBIContent.mdx'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const SBIPage = () => {
    return (
        <main style={pageStyles}>
            <Sbi />
        </main>
    )
}
export default SBIPage
