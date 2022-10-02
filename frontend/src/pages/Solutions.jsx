import React from "react";
import styled from "./Solutions.module.css";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
const Solutions = () => {
  return (
    <>
      <HomeNavbar />
      <div style={{ backgroundColor: "#fff" }}>
        <div className={styled.Bitrix24_Solutions_box}>
          <h1 className={styled.Bitrix24_Solutions_Box_h1}>
            Bitrix24 Solutions
          </h1>
        </div>

        <div
          style={{
            height: "120px",
            marginTop: "3%",
            paddingLeft: "40%",
            margin: "auto",
          }}
        >
          <b>
            {" "}
            <h1 style={{ fontSize: "36px", margin: "auto" }}>
              Bitrix24 Solutions
            </h1>
          </b>
        </div>
        <div className={styled.last_Div}>
          <div className={styled.last_div_child}>
            <div className={styled.img_div}>
              <img
                src="https://www.bitrix24.com/upload/optimizer/converted/images/features/landing/solutions/m1.png.webp?1663355060000"
                alt=""
              />
            </div>
            <div>
              <b>
                <p className={styled.last_div_p1}>By role</p>
              </b>
            </div>
            <div>
              <p className={styled.last_div_p}>Marketing</p>
            </div>
            <div>
              <p className={styled.last_div_p}>HR</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <p className={styled.last_div_p} style={{ lineHeight: "20px" }}>
                Project <br />
                Management
              </p>
            </div>
            <div>
              <p className={styled.last_div_p} style={{ lineHeight: "20px" }}>
                Customer <br />
                Service
              </p>
            </div>
          </div>
          <div>
            <div className={styled.img_div}>
              <img
                src="https://www.bitrix24.com/upload/optimizer/converted/images/features/landing/solutions/m2.png.webp?1663355060000"
                alt=""
              />
            </div>
            <div>
              <b>
                <p className={styled.last_div_p1}>By industry</p>
              </b>
            </div>
            <div>
              <p className={styled.last_div_p}>Legal</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Retail</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Travel</p>
            </div>
            <div>
              <p className={styled.last_div_p} style={{ lineHeight: "20px" }}>
                Transportation <br />
                and Storage
              </p>
            </div>

            <div>
              <p className={styled.last_div_p}>Restaurant</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Remote work</p>
            </div>
            <div>
              <p className={styled.last_div_p}>HR</p>
            </div>
          </div>
          <div>
            <div className={styled.img_div1}>
              <img
                src="https://www.bitrix24.com/upload/optimizer/converted/images/features/landing/solutions/m3.png.webp?1663355060000"
                alt=""
              />
            </div>
            <div>
              <b>
                {" "}
                <p className={styled.last_div_p1}>By need</p>
              </b>
            </div>
            <div>
              <p className={styled.last_div_p}>Mobility</p>
            </div>
            <div>
              <p className={styled.last_div_p}>HR</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Productivity</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Communication</p>
            </div>

            <div>
              <p className={styled.last_div_p} style={{ lineHeight: "20px" }}>
                Management and <br />
                Leadership
              </p>
            </div>
          </div>
          <div>
            <div className={styled.img_div1}>
              <img
                src="https://www.bitrix24.com/upload/optimizer/converted/images/features/landing/solutions/m4.png.webp?1663355060000"
                alt=""
              />
            </div>
            <div>
              <b>
                {" "}
                <p className={styled.last_div_p1}>By tool</p>
              </b>
            </div>
            <div>
              <p className={styled.last_div_p}>Telephony</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Calendars</p>
            </div>
            <div>
              <p className={styled.last_div_p}>CRM </p>
            </div>
            <div>
              <p className={styled.last_div_p} style={{ lineHeight: "20px" }}>
                Tasks and <br /> Projects
              </p>
            </div>

            <div>
              <p className={styled.last_div_p}>Website Builder</p>
            </div>

            <div>
              <p className={styled.last_div_p}>Contact Center</p>
            </div>
          </div>
          <div>
            <div className={styled.img_div1}>
              <img
                src="https://www.bitrix24.com/upload/optimizer/converted/images/features/landing/solutions/m5.png.webp?1663355061000"
                alt=""
              />
            </div>
            <div>
              <b>
                <p className={styled.last_div_p1}> By business size</p>
              </b>
            </div>

            <div>
              <p className={styled.last_div_p}>Solo entrepreneur</p>
            </div>

            <div>
              <p className={styled.last_div_p}>Small Business</p>
            </div>
            <div>
              <p className={styled.last_div_p}>Enterprise</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Solutions;
