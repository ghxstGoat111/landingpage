import logo from './logo.svg';
import './App.css';
// import Collapse, { Panel } from 'rc-collapse';
// import motion from './motionUtils';
import 'rc-collapse/assets/index.css';

function App() {
  const onClick = id => e => {
    e.preventDefault()
    const target = document.getElementById(id);
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  return (
    <div className="App">
      <div id="top"></div>
      <header className="App-header">
        <div className="container header-container">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <div className="logo-title">Eternity Venture</div> */}
          <ul>
            <li onClick={onClick('top')}>About Us</li>
            <li onClick={onClick('what')}>What We Do</li>
            <li onClick={onClick('principles')}>Principles</li>
            <li onClick={onClick('contact')}>Contact</li>
          </ul>
        </div>
      </header>
      <main className="container">
        <div className="content-1">
          <div>
            <h2 id="about">About Us</h2>
            <p>ParaFi Capital is an alternative investment firm focused on blockchain and decentralized finance markets. We take a unique multidisciplinary approach to identifying untapped opportunities through a research intensive, long-term focused investment framework.</p>
            <div className="block">
              <div>
                <h1>2021</h1>
                <p>Year Founded</p>
              </div>
              <div>
                <h1>CT</h1>
                <p>Headquarters</p>
              </div>
            </div>
          </div>
          <p>Our team has deep backgrounds in finance and technology with over a decade of cumulative institutional investing experience at leading asset management firms KKR, Blackstone, and JP Morgan. We are intellectually curious, analytically rigorous, and strive for excellence.</p>
          <div className="black">
            <h3>Investors</h3>
            <p>ParaFi Capital's investors include leading institutional allocators, family offices, HNWIs, and venture capital firms, including Bain Capital Ventures LLC and Galaxy Digital Ventures LLC as strategic partners 1.</p>
          </div>


          <h2 id="what">What We Do</h2>
          <p>We invest behind digital assets that address tangible use cases, demonstrate signs of product-market fit, and exhibit compelling cryptoeconomic models. We use fundamental analysis to select investments based on thorough, institutional due diligence, examining token valuation, technical protocol level research, on-chain data analytics, and active engagement with management and developer teams.</p>
          <div className="sub-title">Investment Approach</div>
          <div className="normal"><span className="arrow"></span>Technology and finance are at our core. We build and leverage technology to decode market dynamics. We continuously seek to harness novel technology systems and software across our firm—from risk management, trade execution, custody, and day-to-day operations.</div>
          <div className="sub-title">Technology</div>
          <div className="normal"><span className="arrow"></span>this is panel content2 or other</div>
          {/* <div className="shrinkblock">
            <Collapse accordion={false} openMotion={motion} style={{color: '#252525', fontWeight: 200, background: 'transparent', border: 'none'}}>
              <Panel header="Investment Approach" headerClass="my-header-class">Technology and finance are at our core. We build and leverage technology to decode market dynamics. We continuously seek to harness novel technology systems and software across our firm—from risk management, trade execution, custody, and day-to-day operations.</Panel>
              <Panel header="Technology">this is panel content2 or other</Panel>
            </Collapse>
          </div> */}

          <h2 id="principles">Principles</h2>
          <div className="sub-title">Analytical Rigor</div>
          <p>We emphasize analytical and quantitative rigor in our investment process. We thrive as problem solvers and excel at decomposing complex cryptoeconomic protocols and behavioral models.</p>
          
          <div className="contact">
            <h2 id="contact">Contract</h2>
            <p>For general inquiries, please contact <a href="mailto:info@parafi.capital">info@parafi.capital</a>.</p>
            <div>
              <div className="contract-item">Greenwich Headquarters</div>
              <div className="contract-item">500 West Putnam Avenue</div>
              <div className="contract-item">Greenwich, CT 06830</div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
        <p>1. It is not known whether the investors listed or any other investors of ParaFi Capital LP approve or disapprove of the advisory services provided. Investor types are included to provide a representative example, and no performance based criteria was used in determining which investors to include in this section. Bain Capital Ventures LP and Galaxy Digital Ventures LLC are listed as a result of their strategic investment in ParaFi Capital LP. Nothing in this section may be considered an endorsement or recommendation.
        </p><p>
        <b>Important Disclaimer:</b> This site is not intended to provide any investment, financial, legal, regulatory, accounting, tax or similar advice, and nothing on this site should be construed as a recommendation by ParaFi Capital LP (“ParaFi Capital”), its affiliates, or any third party, to acquire or dispose of any investment or security, or to engage in any investment strategy or transaction. An investment in any strategy involves a high degree of risk and there is always the possibility of loss, including the loss of principal. Nothing in this site may be considered as an offer or solicitation to purchase or sell securities or other services.
        </p>
        <p>
        By accessing this website and any materials presented herein (the "site"), you accept in their entirety and without modification the Terms of Use and Privacy Policy conditions pertaining to the use of the site. ParaFi Capital reserves the right to change the terms, conditions and notices under which this site is offered without notice at any time. You acknowledge and agree that ParaFi Capital may restrict, suspend or terminate the terms of use or your access to, and use of, all or any part of the site, including any links to third-party sites, at any time, with or without cause, including but not limited to any breach of the terms of use as determined in ParaFi Capital's absolute discretion, and without prior notice or liability. Each use of the site constitutes your agreement to be bound by the then-current terms and conditions set forth in these terms of use. If you do not agree with the terms of use, you are not required to exit and cease the use of this site.
        </p><p>2018 - 2021 © ParaFi Capital LP</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
