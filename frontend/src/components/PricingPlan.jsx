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
  buttonText,
  buttonBg,
  priceColor,
  storage,
  storageColor,
  vStackBg,
  collabSpan,
  categories,
}) => {
  console.log(buttonBg);
  return (
    <div className={styles.planContainer}>
      <div className={`${styles[headBg]} ${styles.planHead}`}>
        <h3>{heading}</h3>
        <p>{headText}</p>
      </div>
      <div className={`${styles[vStackBg]} ${styles.vStack}`}>
        <div className={`${styles.planUsers}`}>
          <div>
            <div>
              {(heading == "Free" || heading == "Professional") && (
                <IoFlameSharp />
              )}
            </div>
            <h3>{users}</h3>
          </div>
          <p>users</p>
        </div>
        <div className={styles.price}>
          {heading == "Free" ? (
            <h2 className={`${styles[priceColor]} ${styles.onlyHundred}`}>
              100% free
            </h2>
          ) : (
            <>
              <div>
                <s>Rs {strikePrice}/mo</s>
                <h2 className={`${styles[priceColor]}`}>
                  Rs. {price}/mo <span>-20%</span>
                </h2>
              </div>
              <div>
                <p>for all user</p>
              </div>
            </>
          )}
        </div>
        <div className={`${styles.btnDiv}`}>
          <button className={`${styles[buttonBg]}`}>{buttonText}</button>
        </div>
        <div className={`${styles[storageColor]}`}>
          <h3>{storage}</h3>
        </div>
        <div className={styles.collobBox}>
          <div>
            <h3>Collaboration</h3>
            {/* <div className={styles.collobSpans}>
                        for(let i = 0;i < spans;i++){
                            <span></span>
                        }
                </div> */}
          </div>
          <div className={styles.collabTags}>
            <p>Chat</p>
            <p>HD Videocalls</p>
            <p>Calendar</p>
            <p>Company workspace</p>
            <p>Feed</p>
            <p>Knowledge base</p>
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((el) => {
            return (
              <div>
                <h3>{el}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
