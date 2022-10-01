import React from "react";
import styles from "../style/pricing.module.css";
import { GrDown } from "react-icons/gr";
import PricingPlan from "../components/PricingPlan";
export const Pricing = () => {
  const freeHeadings = [
    "Tasks & projects",
    "CRM",
    "Drive",
    "Contact Center",
    "Website builder",
  ];
  const basicHeadings = [...freeHeadings, "Online store"];
  const stdHeadings = [...basicHeadings, "Marketing", "online Documents"];
  const profheadings = [
    ...stdHeadings,
    "Sales Intelligence",
    "Automation",
    "HR",
  ];

  return (
    <div className={styles.pricing_container}>
      <div className={styles.pricing_heading}>
        <div>
          <h1>Pricing</h1>
        </div>
      </div>
      <div className={styles.pricing_plans_container}>
        <div className={styles.pricing_archived_plans}>
          <div className={styles.archived_plans_left}>
            <p>Price per month when paying for</p>
            <div>
              <p>1 year</p>
              <div>
                <p>-20%</p>
                <GrDown />
              </div>
            </div>
          </div>
          <div className={styles.archived_plans_right}>
            <p>Renew plans bought before August 1, 2022</p>
            <div>Archived plans</div>
          </div>
        </div>
        <div className={styles.plansCont}>
          <PricingPlan
            heading={"Free"}
            headText="Start working online and sell more with CRM"
            users={"Unlimited"}
            headBg={"Free"}
            price={""}
            buttonText={"REGISTER FREE"}
            buttonBg={"greenBtn"}
            priceColor={"green"}
            storage="5 GB"
            storageColor={"storageColor"}
            vStackBg={"greenVstack"}
            categories={freeHeadings}
          />
          <PricingPlan
            heading={"Basic"}
            headText="Effective collaboration for small businesses and sales teams"
            users={"5"}
            headBg={"blueBg"}
            price={"3,490"}
            strikePrice={"4,360"}
            buttonText={"Buy"}
            buttonBg={"blueBtn"}
            priceColor={"green"}
            storage="24 GB"
            storageColor={"storageColor"}
            vStackBg={"blueVstack"}
            categories={basicHeadings}
          />
          <PricingPlan
            heading={"Standard"}
            headText="Advanced collaboration for your entire company and workgroups"
            users={"50"}
            headBg={"blueBg"}
            price={"6,990"}
            strikePrice={"3,490"}
            buttonText={"Buy"}
            buttonBg={"blueBtn"}
            priceColor={"green"}
            storage="100 GB"
            storageColor={"storageColor"}
            vStackBg={"blueVstack"}
            categories={stdHeadings}
          />
          <PricingPlan
            heading={"Professional"}
            headText="Maximum sales and business process automation"
            users={"100"}
            headBg={"blueBg"}
            price={" 13,990"}
            strikePrice={"4,360"}
            buttonText={"Buy"}
            buttonBg={"blueBtn"}
            priceColor={"green"}
            storage="1024 GB"
            storageColor={"storageColor"}
            vStackBg={"blueVstack"}
            categories={profheadings}
          />
        </div>
      </div>
      <div className={styles.planComparison}>
        <p>Plan Comparison</p>
        <div>
          <button>Save up to Rs. 270,000/mo with Bitrix24</button>
        </div>
      </div>
      <div className={styles.premiseCont}>
        <div className={styles.premiseContLeft}>
          <div className={styles.headings24}>
            <h2>Bitrix24</h2>
            <h2>On-premise Edition</h2>
          </div>
          <p>
            The on-premise edition of Bitrix24 offers supreme performance,
            enterprise-grade security, and complete customization. Designed to
            be hosted on your own server, this version of Bitrix24 comes with
            full access to the source code and API. An ideal choice for large
            enterprises and corporate entities.
          </p>
          <div className={styles.buttons}>
            <button className={styles.filledBtn}>ON-PREMISE FEATURES</button>
            <button className={styles.outlineBtn}>ON-PREMISE PRICES</button>
          </div>
        </div>
        <div className={styles.premiseContRight}>
          <img
            src="https://www.bitrix24.in/images/content_en/prices/content_middle_on_premise_section.jpg?1657626164021"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
