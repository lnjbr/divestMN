import * as React from "react"

export default class Header extends React.Component {
  render() {
  return <header>
      <img src="https://i.imgur.com/G2k5g0I.png" alt="AWC Logo" width="250px"/>
      <h1>
        DIVEST MINNESOTA FROM APARTHEID ISRAEL
        <br />
      </h1> 
      <nav class="nav">
        <button class="navItem navButton"><img src="https://img.icons8.com/?size=100&id=2797&format=png&color=9e6fb2" alt="Home icon" width="14px"/>  <a href="/"> HOME </a></button>
        <button class="navItem navButton"><a href="https://linktr.ee/antiwarmn">STAY UP TO DATE WITH THE ANTI-WAR COMMITTEE'S NEXT ACTIONS</a></button>
        <button class="navItem navButton"><a href="https://form.jotform.com/antiwarmn/AWCSBIpetition">SIGN THE PETITION!</a></button>
      </nav>
    </header>
  }
}