import * as React from "react"
import Layout from "../content/layout"
import Footer from "../Footer"
import Header from "../Header"

const industries = {
    "ABB Group": "$19.279 million",
    "Airbnb": "$37.390 million",
    "Alstom": "$4.831 million",
    "Altice": "$13.937 million",
    "Atlas Copco": "$20.936 million",
    "AXA": "$23.282 million",
    "Booking Holdings Inc": "$49.909 million",
    "Caterpillar Inc": "$111.831 million",
    "Cemex": "$3.668 million",
    "Cisco Systems Inc": "$99.423 million",
    "CNH Industrial": "$172.971 million",
    "Dell": "$49.676 million",
    "Expedia": "$15.051 million",
    "First Solar Inc": "$7.146 million",
    "Ford Motor Company": "$119.590 million",
    "General Motors Co": "$81.213 million",
    "Heidelberg": "$10.675 million",
    "Hewlett Packard": "$37.847 million",
    "Hitachi": "$981,059",
    "Hyundai": "$298.760 million",
    "IBM": "$78.605 million",
    "Jaguar Land Rover": "$915,435",
    "JA Solar": "$147,061",
    "Microsoft": "$1,414.124 million",
    "Mitsubishi": "$112.962 million",
    "Motorola": "$16.410 million",
    "OSI Systems": "$1.963 million",
    "Puma": "$2.675 million",
    "Re/Max": "$31,289",
    "Siemens": "$51.049 million",
    "Sony Corporation": "$41.749 million",
    "Tempur Sealy": "$1.077 million",
    "Terex Corp": "$1.704 million",
    "Toyota Motor Corporation": "$647.278 million",
    "TripAdvisor": "$2.606 million",
    "Volvo": "$22.693 million",
    "Volkswagen": "$28.989 million",
    "WSP Global Inc": "$4.611 million",
    "Wyndham Hotels and Resorts": "$7.125 million",
}

const IndustriesPage = () => {
    return (
    <Layout>
    <Header />
    <main>
        <section class="sectionGrid">
            <h2> INVESTMENTS IN NON-ISRAELI CORPORATIONS PROFITING FROM ISRAEL'S APARTHEID AND GENOCIDE</h2>
            <p>
                The SBI has a total of <strong>$561,458,308 dollars</strong> invested in <em>ABB Group, Airbnb, Alstom, Altice, AXA, Booking Holdings Inc, Cisco Systems Inc, Dell, Expedia, First Solar Inc, 
                Ford Motor Company, General Motors Co, Hewlett Packard, IBM, Jaguar Land Rover, JA Solar, Microsoft, Mitsubishi, Motorola, 
                OSI Systems, Puma, Re/Max, Siemens, Sony Corporation, Tempur Sealy, Toyota Motor Corporation, TripAdvisor, Volkswagen, </em> 
                and <em>Wyndham Hotels and Resorts.</em>
            </p>

            <div>
            {
                Object.keys(industries).map((corp) => ( 
                <div>
                    <p class="corporation" key={corp}>{corp}</p>
                    <p class="dollarsInvested">Dollars Invested: {industries[corp]}</p>
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
export default IndustriesPage
