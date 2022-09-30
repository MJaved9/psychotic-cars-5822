import React from "react";
import styles from "../style/pricing.module.css";
import { IoFlameSharp } from "react-icons/io5";
const PricingPlan = ({
  headBg,
  heading,
  headText,
  users,
  strikePrice,
  price,
  color,
  buttonText,
  buttonBg,
  priceColor,
  storage,
}) => {
  return (
    <div className={styles.planContainer}>
      <div className={`${styles[headBg]} ${styles.planHead}`}>
        <h3>{heading}</h3>
        <p>{headText}</p>
      </div>
      <div>
        <div className={`${styles.planUsers}`}>
          <div>
            <div>{heading && <IoFlameSharp />}</div>
            <h3>{users}</h3>
          </div>
          <p>users</p>
        </div>
        <div className={styles.price}>
          {heading == "Free" ? (
            <h2 className={`${styles[priceColor]}`}>100% free</h2>
          ) : (
            <div>
              <s>Rs {strikePrice}/mo</s>
              <h2 className={`${styles[priceColor]}`}>
                Rs. {price}/mo <span>-20%</span>
              </h2>
            </div>
          )}
          <div>
            <p>for all user</p>
          </div>
        </div>
        <div>
          <button className={`${styles[buttonBg]}`}>{buttonText}</button>
        </div>
        <div className={`${styles[storage]}`}>
          <h3>{storage}</h3>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
