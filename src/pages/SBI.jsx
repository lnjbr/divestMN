import * as React from "react"
import Sbi from '../content/SBIContent.mdx'

const pageStyles = {
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 600,
}

const SBIPage = () => {
    return (
        <main style={pageStyles}>
            <Sbi />
        </main>
    )
}
export default SBIPage
