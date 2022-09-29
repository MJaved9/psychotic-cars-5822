import React from "react";
import Carousel from "../components/Carousel";
import Homenavbar from "../components/HomeNavbar";
import { Button } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div style={{background:"white"}}>
      <Homenavbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          height: "auto",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#262626",
            fontSize: "46px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Bitrix24. Your ultimate workspace.
        </h2>
        <Carousel />
      </div>
      <img
        src="https://i.postimg.cc/DydryWv3/Bitrix-6.png"
        style={{ border: "1px  red", width: "100%" }}
        alt=""
      />
      
    </div>
  );
};
