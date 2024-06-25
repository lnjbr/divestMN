import * as React from "react"
import Layout from "../content/layout"
import Footer from "../Footer"
import Header from "../Header"

const israeli = {
    "Azrieli Group Ltd": "$804,247",    
    "Camtek Ltd": "$2.331 million",
    "Check Point Software Technologies": "$24.079 million",
    "CyberArk Software": "$3,770,124",
    "Elbit Systems": "$1.312 million",
    "Energean": "$176,567",
    "Equital Ltd": "$15",
    "Global-E Online Ltd": "$7.081 million",
    "Hapoalim Bank": "$3.396 million",
    "ICL Group": "$2.073 million",
    "InMode Ltd": "$3.290 million",
    "Israel Discount Bank": "$2.083 million",
    "Ituran Location and Control Ltd": "$417,096",
    "Leumi Bank": "$3.834 million",
    "monday.com Ltd": "$2.032 million",
    "Nano X Imaging Ltd": "$30,145",
    "NICE Ltd": "$11.519 million",
    "Oil Refineries Ltd": "$29,425",
    "Pagaya Technologies Ltd": "$4.450 million",
    "Playtika Holding Corp": "$1.688 million",
    "Plus500 Ltd": "$475,716",
    "Protalix Biotherapeutics Inc": "$4,228",
    "Radware Ltd": "$2.662 million",
    "State of Israel": "$21.588 million",
    "Taro Pharmaceuticals Industries": "$37,439",
    "Teva Pharmaceuticals Industries": "$14.099 million",
    "UroGen Pharma Ltd": "$17,406",
    "Wix.com": "$3.810 million",
}

const IsraeliPage = () => {
    return (
    <Layout>
    <Header />
    <main>
        <section class="sectionGrid">
            <h2> INVESTMENTS IN ISRAEL AND ISRAELI CORPORATIONS</h2>
            <p>
                The SBI has a total of <strong>$119,051,707 dollars</strong> invested in <em>Azrieli Group Ltd, Camtek Ltd, Check Point Software Technologies, CyberArk Software, Elbit Systems, Energean, Equital Ltd,  Global-E Online Ltd, 
                    Hapoalim Bank, ICL Group, InMode Ltd, Israel Discount Bank, Ituran Location and Control Ltd, Leumi Bank, monday.com Ltd, 
                    Mizrahi Tefahot Bank, Nano X Imaging Ltd, NewMed Energy LP,  NICE Ltd,  Oil Refineries Ltd, Pagaya Technologies, 
                    Playtika Holding Corp, Plus500 Ltd, Protalix Biotherapeutics Inc, Radware Ltd, State of Israel, Taro Pharmaceutical Industries, 
                    Teva Pharmaceutical Industries, Tower Semiconductor Ltd, Urogen Pharma Ltd, </em> 
                and <em>Wix.com</em>
            </p>

            <div>
            {
                Object.keys(israeli).map((corp) => ( 
                <div>
                    <p class="corporation" key={corp}>{corp}</p>
                    <p class="dollarsInvested">Dollars Invested: {israeli[corp]}</p>
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
export default IsraeliPage
