import * as React from "react"
import Layout from "../content/layout"
import Footer from "../Footer"
import Header from "../Header"

const weapons = {
    "BAE Systems": "$122.165 million",
    "Boeing Company": "$117.089 million",
    "Cadre Holdings Inc": "$22,443",
    "General Dynamics Corp": "$27.700 million",
    "General Electric": "$57.447 million",
    "Honeywell International": "67.085 million",
    "L3Harris": "$16.930 million",
    "Leonardo": "$8.527 million",
    "Lockheed Martin": "$64.419 million",
    "Northrop Grumman": "$31.425 million",
    "Oshkosh": "$15.069 million",
    "Palantir Technologies": "$22.911 million",
    "RTX Corp": "$94.662 million",
    "Rolls-Royce Holdings": "$11.375 million",
    "Sturm Ruger": "$41,371",
    "ThyssenKrupp": "$3.275 million",
}

const WeaponsPage = () => {
    return (
    <Layout>
    <Header />
    <main>
        <section class="sectionGrid">
            <h2> INVESTMENTS IN NON-ISRAELI WEAPONS MANUFACTURERS</h2>
            <p>
                The SBI has a total of <strong>$561,458,308 dollars</strong> invested in <em>BAE Systems, Boeing Company, Cadre Holdings Inc, General Dynamics Corp, General Electric Co, Honeywell, L3Harris, Leonardo, Lockheed Martin Corp, 
                Northrop Grumman Corp, Oshkosh, Palantir Technologies, Rolls-Royce Holdings, RTX Corp, Sturm Ruger,</em> and <em>ThyssenKrupp</em>
            </p>

            <div>
            {
                Object.keys(weapons).map((corp) => ( 
                <div>
                    <p class="corporation" key={corp}>{corp}</p>
                    <p class="dollarsInvested">Dollars Invested: {weapons[corp]}</p>
                </div>
                ))
            }
            </div>


        </section>
    </main>
    <Footer />
    </Layout>
    )
}
export default WeaponsPage
