import React from "react";
import stripe from "../../assets/images/stripe.svg";
import pinterest from "../../assets/images/pinterest.svg";
import kpmg from "../../assets/images/kpmg.svg";
import mercedes from "../../assets/images/mercedes.svg";
import pg from "../../assets/images/pg.svg";
import telus from "../../assets/images/telus.svg";

const TrustedOrgs = () => {
  return (
    <div>
      <div className="trusted-hero my-24  build-in-animate w-full">
        <p className="d-block color-fg-subtle f4-mktg">
          Trusted by the world's leading organizations&nbsp;↘︎
        </p>

        <div className="trusted-hero-img flex flex-wrap md:justify-around justify-between items-center ">
          <img src={stripe} alt="Stripe logo" height="44" className="my-3" />
          <img
            src={pinterest}
            alt="Pinterest logo"
            height="44"
            className="my-3"
          />
          <div className="trusted-hero-divider1 "></div>
          <img src={kpmg} alt="KPMG logo" height="44" className="my-3" />
          <div className="trusted-hero-divider2 col-12 d-none d-sm-block d-md-none"></div>
          <img
            src={mercedes}
            alt="Mercedes-Benz logo"
            height="44"
            className="my-3"
          />
          <div className="trusted-hero-divider3 col-12 d-sm-none"></div>
          <img src={pg} alt="P&amp;G logo" height="32" className="my-3" />
          <img src={telus} alt="Telus logo" height="32" className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default TrustedOrgs;
