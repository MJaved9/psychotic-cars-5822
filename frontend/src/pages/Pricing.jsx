import React from "react";
import styles from "../style/pricing.module.css";
import { GrDown } from "react-icons/gr";
import PricingPlan from "../components/PricingPlan";
export const Pricing = () => {
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
            priceColor={"green"}
            buttonBg={"greenBg"}
            storage="5 GB"
            price={""}
            buttonText={"REGISTER FREE"}
          />
        </div>
      </div>
    </div>
  );
};
