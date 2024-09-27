import React from "react";
import Navbar2 from "./Navbar2";
import autoprofitohero from "../assets/img/content/AutoProfitoHero.png";
import trader from "../assets/img/content/traderAutoProfito.png";
function AutoProfito() {
  return (
    <div>
      <Navbar2 />
        <div className="container-fluid bg-light">
      <div className="container  py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold">
              <span className="" style={{color:"#007bff"}} >AutoProfito</span>
            </h1>
            <h2 className=" mb-4" style={{color:"#007bff"}} >Multi Broker Management</h2>
            <p className="lead mb-4">
              Explore the best copy trading platforms in India, supporting major
              Indian brokers like Zerodha, Angel Broking, Fyers, Finvasia, and
              Alice Blue across NSE, BSE, and MCX exchanges.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="https://autoprofito.com/" target="_blank" className="btn " style={{backgroundColor:"#007bff",color:"white"}}>Dashboard</a>
              <a href="https://autoprofito.com/" target="_blank" className="btn btn-outline-primary" >Explore Now</a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={autoprofitohero}
              alt="AutoProfito Dashboard"
              className="img-fluid "
            />
          </div>
        </div>
      </div>
</div>
      <section className="py-2">
        <div className="container py-lg-5 px-lg-9">
          <h2 className="text-center mb-4">Supported Brokers</h2>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Broker</th>
                  <th className="text-center">Master Account</th>
                  <th className="text-center">Student Account</th>
                </tr>
              </thead>
              <tbody>
  <tr>
    <td>Angel One</td>
    <td className="text-center">
      <i className="fas fa-check-circle text-success"></i>
    </td>
    <td className="text-center">
      <i className="fas fa-check-circle text-success"></i>
    </td>
  </tr>

  <tr>
    <td>Zerodha</td>
    <td className="">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
  </tr>

  <tr>
    <td>Dhan</td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
  </tr>

  <tr>
    <td>Motilal Oswal</td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
  </tr>

  <tr>
    <td>Kotak Neo</td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
    <td className="text-center">
      <div className="d-flex justify-content-center align-items-center ms-8">
        <i className="fa-regular fa-clock text-success ms-4"></i>
        <span className="ms-2 small text-muted">Coming Soon</span>
      </div>
    </td>
  </tr>
</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container text-center ">
          <h1 className="fw-bold">
            How <span className="text-info">AutoProfito</span> Helps You?
          </h1>
        </div>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-cloud fa-3x text-info mb-3 "></i>
                  <h3 className="card-title ">Cloud Based</h3>
                  <p className="card-text text-muted">
                    Fully cloud based automated system with simple automation
                    and easy to use algorithmic trading system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-users fa-3x text-warning mb-3"></i>
                  <h3 className="card-title">Multiple Accounts</h3>
                  <p className="card-text text-muted">
                    Automate trading in multiple accounts with no software
                    installation and VPS requirement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-code fa-3x text-black mb-3"></i>
                  <h3 className="card-title">Very Low Latency</h3>
                  <p className="card-text text-muted">
                    AutoProfito is built on top of the latest technology to ensure low latency and high-speed trade execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={trader}
                alt="Trader using AutoProfito"
                className="img-fluid "
              />
            </div>
            <div className="col-md-6">
              <h2 className="display-4 fw-bold mb-4">
                Join the trading revolution with AutoProfito
              </h2>
              <p className="lead text-muted mb-4">
                At AutoProfito you will get the tools used by BIG PLAYERS at
                your fingertip, come and join the revolution at lowest possible
                cost
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Highly secured cloud infrastructure
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Fast trade execution in multiple brokers
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Simultaneous trade execution in multiple Brokers and Multiple
                  accounts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 bg-info bg-opacity-10 border-1 border-info rounded">
              <div className="card-body text-center ">
                <i className="fas fa-users fa-3x text-info mb-3"></i>
                <h2 className="card-title display-6 fw-bold">4836</h2>
                <p className="card-text text-muted">Users</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-danger bg-opacity-10 border-1 border-danger rounded">
              <div className="card-body text-center">
                <i className="fas fa-folder-open fa-3x text-danger mb-3"></i>
                <h2 className="card-title display-6 fw-bold">6215</h2>
                <p className="card-text text-muted">Demat Accounts</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-warning bg-opacity-10 border-1 border-warning rounded">
              <div className="card-body text-center">
                <i className="fas fa-shopping-cart fa-3x text-warning mb-3"></i>
                <h2 className="card-title display-6 fw-bold">1828436</h2>
                <p className="card-text text-muted">Order Placed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container pt-5">
          <h1 className=" fw-bold mb-4">
            Best Platform for Copy Trading in India
          </h1>
          <div className="row">
            <div className="col">
              <p className=" text-muted mb-4">
                Copy trading, an advanced version of social trading, enables you
                to replicate the trades of one trading account into other
                accounts effortlessly. With copy trading, you can receive
                automated signals from experienced signal providers and mirror
                their trades in your trading or demat account, even when you're
                away from your system.
              </p>
              <p className=" text-muted mb-4">
                When selecting a copy trading platform, it's crucial to consider
                your specific requirements. Several copy trading companies in
                India offer copy trading software and tools, but the best
                platform is the one that meets your needs effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-2">
          <h1 className=" fw-bold mb-4">
            Key Features of an Ideal Copy Trading Platform
          </h1>
          <div className="row">
            <div className="col">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Fast Order Execution:</strong>{" "}
                  <span className="text-muted">
                    Look for a platform that ensures swift execution of copied
                    trades, minimizing delays and slippage.
                  </span>
                </li>
                <li className="mb-3">
                  <strong>Low Charges:</strong>{" "}
                  <span className="text-muted">
                    Opt for a copy trading platform with competitive pricing to
                    maximize your returns. Consider the costs associated with
                    using the copy trading software.
                  </span>
                </li>
                <li className="mb-3">
                  <strong>Copy Trading Tools:</strong>{" "}
                  <span className="text-muted">
                    A reliable platform should provide you with a comprehensive
                    set of copy trading tools, enhancing your trading experience
                    and increasing your chances of success.
                  </span>
                </li>
                <li className="mb-3">
                  <strong>Better Customer Support:</strong>{" "}
                  <span className="text-muted">
                    Prioritize platforms that offer excellent customer support,
                    readily available to assist you with any queries or issues
                    that may arise during your copy trading journey.
                  </span>
                </li>
                <li className="mb-3">
                  <strong>Safe and Secure:</strong>{" "}
                  <span className="text-muted">
                    Security is of utmost importance when selecting a copy
                    trading platform. Ensure the platform implements robust
                    security measures to protect your personal and financial
                    information.
                  </span>
                </li>
                <li className="mb-3">
                  <strong>Reliable:</strong>{" "}
                  <span className="text-muted">
                    Choose a reputable and trustworthy copy trading platform
                    that has a proven track record in the industry, with
                    positive reviews and testimonials from users.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-muted">
                One such exemplary copy trading platform is AutoProfito. AutoProfito
                offers a host of benefits, making it an ideal choice for copy
                trading enthusiasts. With AutoProfito, you can enjoy fast order
                execution, ensuring that you don't miss out on lucrative trades.
                The platform also features competitive charges, enabling you to
                maximize your profits. Additionally, AutoProfito provides an array
                of powerful copy trading tools to enhance your trading
                strategies. Their dedicated customer support team is available
                to assist you whenever you need help. Rest assured, AutoProfito
                prioritizes the security of your data and funds, implementing
                state-of-the-art security measures.
              </p>
            </div>
          </div>
        </div>
        <div className="container py-5">
        <h1 className="text-center mb-5">Services we offer</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-robot fa-3x text-primary mb-3"></i>
                <h3 className="card-title">Trade Automation</h3>
                <p className="card-text text-muted">
                  Automate trade from Master account to other child accounts
                  with cross broker operation.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-copy fa-3x text-success mb-3"></i>
                <h3 className="card-title">Copy Trading</h3>
                <p className="card-text text-muted">
                  Mirror the trades of successful traders automatically in your
                  account.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-chart-line fa-3x text-info mb-3"></i>
                <h3 className="card-title">Portfolio Management</h3>
                <p className="card-text text-muted">
                  Optimize and manage your investment portfolio with our expert
                  tools.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-signal fa-3x text-warning mb-3"></i>
                <h3 className="card-title">Trading Signals</h3>
                <p className="card-text text-muted">
                  Receive real-time trading signals to make informed investment
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-shield-alt fa-3x text-danger mb-3"></i>
                <h3 className="card-title">Risk Management</h3>
                <p className="card-text text-muted">
                  Implement robust risk management strategies to protect your
                  investments.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 text-center">
              <div className="card-body">
                <i className="fas fa-graduation-cap fa-3x text-secondary mb-3"></i>
                <h3 className="card-title">Trading Education</h3>
                <p className="card-text text-muted">
                  Access comprehensive educational resources to enhance your
                  trading skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="container pt-3">
          <h1 className=" fw-bold mb-4">
            Copy Trading in the Indian Stock Market
          </h1>
          <div className="row">
            <div className="col">
              <p className=" text-muted mb-4">
                Copy Trading is an innovative approach that allows you to
                replicate the trades of experienced traders in the Indian stock
                market directly into your demat accounts using APIs. By using
                copy trading in Indian stocks, you can automate your trading by
                copying the trades of other traders. This tactic, known as
                copying, connects a portion of your portfolio with the
                portfolios of master traders, ensuring that every trade and
                transaction is mirrored.
              </p>
              <p className="text-muted mb-4">
                To get started, you simply open a personal account and connect
                it with a master trader or any trader whom you trust. From that
                point on, every action taken by the master trader will be
                automatically replicated in your personal account.
              </p>
              <p className="text-muted mb-4">
                Copy trading in Indian stocks enables you to receive automated
                signals from signal providers and copy them into your account,
                even when you are busy or unavailable. Every trading strategy
                and action, such as opening positions, setting stop losses,
                closing positions, and taking profit orders, will be executed
                automatically in your copying account.
              </p>
              <p className="text-muted mb-4">
                This technique is particularly beneficial for newcomers or
                traders who lack confidence in placing trades in the stock
                market. It serves as an excellent way to learn how to trade in
                the share market by observing the actions of expert traders.
                With the help of copy trading, you can enhance your trading
                experience. This feature can be used in various markets,
                including stocks, forex, and more. Copy trading in the NSE
                (National Stock Exchange) is one of the most popular
                applications of this technique in India.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-3">
          <h1 className=" fw-bold mb-4">
            How Does Copy Trading Work in NSE, BSE & MCX?
          </h1>
          <div className="row">
            <div className="col">
              <p className=" text-muted mb-4">
                Copy trading in the Indian stock market involves two types of
                accounts: a master account and child accounts. The master
                account makes trading decisions, while the child accounts
                replicate those decisions automatically. Both accounts must be
                on a copy trading platform that provides copying services.
              </p>
              <p className="text-muted mb-4">
                You can choose your strategy manager, and the same trading
                signals and actions will be copied from the master account to
                the child accounts. If you are an expert trader and want to send
                the same trading signals to multiple demat accounts, copy
                trading in the stock market allows you to execute the same
                transactions in numerous accounts.
              </p>
              <p className="text-muted mb-4">
                NSE copy trading, along with copy trading in BSE and MCX, is a
                form of social trading that enables investors to automatically
                replicate the trades of successful traders in the Indian stock
                market. By participating in copy trading, investors have the
                opportunity to potentially earn profits by mirroring the market
                movements in these exchanges.
              </p>
            </div>
          </div>
        </div>
      </section>

     


<section className="py-4">
  <div className="container my-0">
    <h5 className="text-center text-muted mb-4 text-uppercase">Pricing Plans</h5>
  </div>
  <div className="container pb-5">
    <h2 className="text-center fw-bold mb-5">The right plan for your business</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {/* Professional Plan */}
      <div className="col">
        <div className="card h-100 shadow-sm p-4">
          <div className="card-body d-flex flex-column">
            <h3 className="card-title text-center ">Professional</h3>
            <div className="my-4 fw-bold text-center">
              <span className="fs-3">₹ 1499</span> <del className="ms-2">₹ 1799</del>
              <br />
              <small>+18% GST applicable</small>
            </div>
            <ul className="list-unstyled flex-grow-1">
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Auto Login
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>30 Days
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Copy Trading up to 9 Accounts (Excluding Master)
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>1 Master Account
              </li>
            </ul>
            <div className="text-center mt-auto">
              <button className="btn btn-outline-primary btn-lg w-100">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="col">
        <div className="card h-100 shadow p-4">
          <div className="card-body d-flex flex-column">
            <h3 className="card-title text-center ">Enterprise</h3>
            <div className="my-4 fw-bold text-center">
              <span className="fs-3">₹ 2499</span> <del className="ms-2">₹ 2999</del>
              <br />
              <small>+18% GST applicable</small>
            </div>
            <ul className="list-unstyled flex-grow-1">
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Auto Login
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>30 Days
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Copy Trading up to 24 Accounts (Excluding Master)
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>2 Master Accounts
              </li>
            </ul>
            <div className="text-center mt-auto">
              <button className="btn btn-outline-primary btn-lg w-100">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Plan */}
      <div className="col">
        <div className="card h-100 shadow-sm p-4">
          <div className="card-body d-flex flex-column">
            <h3 className="card-title text-center ">Custom</h3>
            <div className="my-4 fw-bold text-center">
              <span className="fs-3">₹ 675</span>
              <br />
              <small>+18% GST applicable</small>
            </div>
            <ul className="list-unstyled flex-grow-1">
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Auto Login
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>30 Days
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>Copy Trading up to 24 Accounts (Excluding Master)
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>2 Master Accounts
              </li>
            </ul>
            <div className="text-center mt-auto">
              <button className="btn btn-outline-primary btn-lg w-100">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     
    </div>
  );
}

export default AutoProfito;
