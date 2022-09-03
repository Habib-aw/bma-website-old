import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./donate.css";
function Donate() {
  const [other, setOther] = useState(false);
  const [clicked, setClicked] = useState([true, false, false, false, false]);
  const [donationAmount, setDonationAmount] = useState(5);
  const callToAction =
    ", to donate please get in contact with the imam or masjid officials";
  useEffect(() => {
    document.title = "Donate | Baitul Mamur Academy";
  });
  function set5() {
    setOther(false);
    setClicked([true, false, false, false, false]);
    setDonationAmount(5);
  }
  function set10() {
    setOther(false);
    setClicked([false, true, false, false, false]);
    setDonationAmount(10);
  }
  function set25() {
    setOther(false);
    setClicked([false, false, true, false, false]);
    setDonationAmount(25);
  }
  function set50() {
    setOther(false);
    setClicked([false, false, false, true, false]);
    setDonationAmount(50);
  }
  function setOtherF() {
    setOther(true);
    setClicked([false, false, false, false, true]);
    setDonationAmount(5);
  }
  function setDonation(amount) {
    if (amount === "" || amount >= 1) {
      setDonationAmount(amount);
    } else if (isNaN(amount)) {
      console.log("not a number");
    } else if (amount < 1) {
      console.log("please enter a numbe rabove £1");
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="donate">
      <div className="d-flex">
        <h1 className="left-wrapper mono d-flex justify-content-center donate-title block-space">
          Donate.
        </h1>
        <div className="right-wrapper"></div>
      </div>
      <div className="donation-with-other">
        <div className="donation-all block-space">
          <form className="donation">
            <h2 className="donate-subtitle">
              How much would you like to donate
            </h2>
            <div className="donation-btns">
              <input
                type="radio"
                id="5"
                name="donate"
                value="donate"
                onClick={() => set5()}
              />
              <label id={clicked[0] ? "bg-red" : ""} for="5">
                £5
              </label>
              <input
                type="radio"
                id="10"
                name="donate"
                value="donate"
                className="donate-btn"
                onClick={() => set10(false)}
              />
              <label id={clicked[1] ? "bg-red" : ""} for="10">
                £10
              </label>
              <input
                type="radio"
                id="25"
                name="donate"
                value="donate"
                className="donate-btn"
                onClick={() => set25(false)}
              />
              <label id={clicked[2] ? "bg-red" : ""} for="25">
                £25
              </label>
              <input
                type="radio"
                id="50"
                name="donate"
                value="donate"
                className="donate-btn"
                onClick={() => set50(false)}
              />
              <label id={clicked[3] ? "bg-red" : ""} for="50">
                £50
              </label>
              <input
                type="radio"
                id="other"
                name="donate"
                value="donate"
                className="donate-btn"
                onClick={() => setOtherF(true)}
              />
              <label id={clicked[4] ? "bg-red" : ""} for="other">
                Other
              </label>
            </div>
            {other ? (
              <div style={{ marginTop: 12 }}>
                <span>£</span>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={donationAmount}
                  onChange={(e) => setDonation(e.target.value)}
                ></input>
              </div>
            ) : null}
            <h2 className="donate-subtitle">Payment method</h2>
            <div className="payment-method-details">
              <div className="donation-names">
                <div>
                  <label htmlFor="first">First name</label>
                  <input
                    type="text"
                    id="first"
                    placeholder="First name"
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="second">Second name</label>
                  <input
                    type="text"
                    id="second"
                    autoComplete="family-name"
                    placeholder="Second name"
                  />
                </div>
              </div>
              <div className="card-num">
                <label htmlFor="card-number">Card number </label>
                <input type="text" id="card-number" placeholder="Card number" />
              </div>
              <div>
                <label htmlFor="exp">Expiry date</label>
                <input type="text" id="exp" placeholder="Expiry date" />
              </div>
              <div>
                <label htmlFor="cvc">Cvc</label>
                <input type="text" id="cvc" placeholder="Cvc" />
              </div>
            </div>
            <span>(Apple Pay here) </span>
            <span>(Google Pay)</span>
            <br />
            <button type="submit" className="btn">
              Pay
            </button>
          </form>

          <div className="progress-bars">
            <div className="progress-bars-child">
              <ProgressBar
                title={"Rent"}
                raised={4550}
                target={18200}
                description={
                  "Please donate towards the masjid rent in order to support the masjid and keep it running" +
                  callToAction
                }
              />
            </div>
            <div className="progress-bars-child">
              <ProgressBar
                title={"Council rate"}
                raised={50}
                target={1500}
                description={
                  "Please donate towards the council rent to help finance recurring bills so the staff can spend on bettering masjid services" +
                  callToAction
                }
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="donation-other">
          <div className="inner-donation-other">
            <h2 className="other-donate-title donate-title cursive  block-space">
              Other ways to donate
            </h2>
            <div className="other-donate">
              <div className="other-masjid">
                Visit the masjid in person and donate through the donation box
                or card machine left near the entrance/exit of the masjid
              </div>
              <div className="other-bank">
                Donate via online banking{" "}
                <div className="org-name">
                  <div>Organisation name:&nbsp;</div>
                  <div>Baitul Mamur Academy</div>
                </div>
                Acc no. 31643290
                <br />
                Sort code: 40-01-18
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
