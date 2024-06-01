import * as React from "react"
import WhatCanYouDo from '../content/WhatCanYouDoContent.mdx'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth: 500,
}

const WhatCanYouDoPage = () => {
    return (
        <main style={pageStyles}>
            <WhatCanYouDo />
        </main>
    )
}
export default WhatCanYouDoPage
