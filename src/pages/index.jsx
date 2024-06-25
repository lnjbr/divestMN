import * as React from "react"
import Layout from "../content/layout"
import Footer from "../Footer"
import Header from "../Header"

const IndexPage= () => {
  return (
    <Layout>
    <Header />
    <main>
      <section class="sectionGrid">
        <div class="text">
          <h2 class="textItem">
            WHAT IS THE STATE BOARD OF INVESTMENT?
          </h2>
          <p class="textItem">
            <a href="https://msbi.us/">The State Board of Investment (SBI)</a> is a government body chaired by Governor <strong>Tim Walz</strong>, State Auditor <strong>Julie Blaha</strong>, Secretary of State <strong>Steve Simon</strong>, and Attorney General <strong>Keith Ellison</strong>.
            The SBI manages investments for state retirement plans and pensions, state trusts, and agency cash accounts, funded in part, by taxpayer dollars. 
            </p>

            <p>
            Of the $142 billion dollars managed by the SBI, roughly <strong>$119 million dollars</strong> are invested in Israeli companies and government bonds. An additional <strong>$4 billion dollars</strong> is invested in companies complicit in 
            or profiting from Israel’s apartheid and genocide.
          </p>
        </div>

        <div class="photoGrid">
          <img class="four" alt="Tim Walz" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7edtiMRlI_lqbbz8eCPH6fjkeBvE0YRMTM8oUpQJvZ2PXRPOa"/>
          <img class="four" alt="Julie Blaha" src="https://npr.brightspotcdn.com/legacy/sites/kaxe/files/202008/blaha.jpg" />
          <img class="four" alt="Steve Simon" src="https://www.sos.state.mn.us/media/1397/steve-simon-official-portrait.jpg" />
          <img class="four" alt="Keith Ellison" src="https://upload.wikimedia.org/wikipedia/commons/6/62/Keith_Ellison_portrait.jpg" />
        </div>
      </section>

      <section class="sectionGrid">
      <div class="text">
        <h2>WHERE DO THESE INVESTMENTS GO?</h2>
        <p>
          In 2023, the SBI invested over three billion dollars in entities that are either complicit in, or benefit from, the Israeli occupation. 
          These investments include weapons manufacturing companies, pharmaceutical companies, the tourism industry, heavy machinery, and all the way down to investments into the state of Israel directly.
        </p>
        </div>
        <div class="photoGrid">
          <img class="photo" alt="An illustration by Carlos Latuff of an American flag supplying bullets to an Israeli flag that is shooting a Palestinian flag" 
          src="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vbECHdevSPlNT4YoxvypotKFheYgWREZd21bQa0TtfV92-4Ag3j654CyAkcm1jyGRjn2vKZ5tY95EO-kBuTWyFHXtxz3AKnnnoRxBSd7sFG2pJmdUVK21QJ5dEuK7IovIzDB10dFQHQgjabey1vV89Nof2XjWrqPy7279oUHFd4WKm=s0-d"/>
        </div>
      </section>

      <section class="sectionGrid">
        <div class="text">
          <h2>INVESTING IN WEAPONS</h2>
          <p>
            The SBI is an enabler of the carpet bombing, invasion, occupation, and ongoing genocide in Palestine. 
            It invests in companies like Boeing, Raytheon, Lockheed Martin and Israel’s own Elbit Systems -- who boast that their products are tested on Palestinians. 
            A news report from ‘Who Profits’ states that, “As in previous military onslaughts on Gaza, the Israeli military is currently testing new weapons and technologies through their inaugural operational deployment.”
            In total, the SBI invested $413 million into the war industry. Every dollar invested acts as a potential life lost.
          </p>

          <button class="learnMoreButton">
            <a href="/weapons">LEARN MORE →</a>
          </button>

        </div>
      </section>

      <section class="sectionGrid">
        <div class="text">
          <h2>INDUSTRIES OF APARTHEID</h2>
          <p>
            The Israeli apartheid state is made possible through an unambiguous system of support from multinational corporations. Notable examples include AirBnB allowing settlers to have ‘getaways’ on stolen land, and massive tech companies like Microsoft making the active surveillance of Palestinians possible. In particular, Caterpillar's armored bulldozers are used to collapse the homes of Palestinians (often with people still inside). These machines were used as crowd control and to attack Palestinian protesters during the Great March of Return.
            The SBI provides financial support to these corporations that make up the resources and tools of the of apartheid state of Israel.
          </p>

          <button class="learnMoreButton">
            <a href="/industries">LEARN MORE →</a>
          </button>
        </div>
      </section>

      <section class="sectionGrid">
        <div class="text">
          <h2>INVESTING IN ISRAEL</h2>
          <p>
            The SBI supports the apartheid state of Israel by investing $25 million in bonds directly into the state, and another $10 million into Israeli Banks. 
            The SBI further invests in Israeli businesses that profit not only off of stolen land, but also Palestinian labor as they act as both landlord and boss. 
            Investing in both the state of Israel and the corporations further exacerbates the system of apartheid, and sustains the alliance between the US and Israel as imperial forces.
          </p>

          <button class="learnMoreButton">
            <a href="/israeli">LEARN MORE →</a>
          </button>
        </div>
      </section>

      <section class="sectionGrid">
        <div class="text">
          <h2>WHY DIVEST</h2>
          <p>
            Divestment is a political act. It demands that we break the ties between the US and Israel. It demands that those who profit, prop up, sustain, and help create the apartheid state of Israel feel the consequences of their actions. 
            It demands that Israel, above all else, understands that these actions of terror, settlement, colonization, occupation and genocide will not go unseen and they will be held accountable.
          </p>
          <p>
            We must do all we can to isolate the state of Israel. The SBI previously divested from the apartheid in South Africa in the 1980s and we can stand by that precedent and do it again.
          </p>
          <div class="photoGrid">
            <img class="photo" src="https://i.imgur.com/gNjajmV.png" alt="A collage of Apartheid South Africa era flyers and newspaper clippings about divestment" />
          </div>
        </div>
      </section>

      <section class="sectionGrid">
        <div class="text">
          <h2>WHAT CAN YOU DO?</h2>
          <p>
            <a href="https://form.jotform.com/antiwarmn/AWCSBIpetition">Sign the petition</a> to demand the SBI divests from Israeli apartheid and follow @AntiwarMN on socials to catch upcoming protests and call-in actions.
          </p>
        <div class="photoGrid">
          <img class="photo" alt="The front of a march. Protestors are carrying a 'Divest from genocide; Human rights for all' banner and waving Palestinian flags" src="https://pbs.twimg.com/media/GBCO2p4WEAEZawQ?format=jpg&name=large"/>
        </div>
          
        </div>
      </section>


    </main>
    <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Divest MN</title>
