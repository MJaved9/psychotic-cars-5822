import React from "react";
import styles from "../style/pricing.module.css";
import { GrDown } from "react-icons/gr";
export const Pricing = () => {
  return (
    <div className={styles.pricing_container}>
      <div className={styles.pricing_heading}>
        <div>
          <h1>Pricing</h1>
        </div>
      </div>
      <div>
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
        </div>
      </div>
    </div>
  );
};
