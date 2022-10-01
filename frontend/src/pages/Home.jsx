import React from "react";
import Carousel from "../components/Carousel";
import Homenavbar from "../components/HomeNavbar";
import { Button, Heading } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import {MdCheckCircle} from "react-icons/md"
import {Link} from 'react-router-dom'
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
      <img
        src="https://i.postimg.cc/h4kv8LBx/Bitrix-7.png"
        alt=""
        style={{ marginTop: "40px", marginBottom: "30px", width: "100%" }}
      />
      <div style={{display:"flex",justifyContent:"flex-start",gap:"15px",backgroundColor:"#f8f8f8"}}>
        <div><img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/section_on_premise.jpg.webp?1663227423000"
         style={{ marginTop: "40px", marginBottom: "30px", width: "80%" }}
        /></div>
        <div style={{marginTop:"50px"}}>
          <br></br>
          <h1 style={{fontSize: "30px",textAlign:"justify"}}>Bitrix24 On-Premise Edition</h1>
          <br></br>
          <div style={{fontSize:"19px",lineHeight:"26px",textAlign:"justify",display:"grid"}}>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>Increased service performance and speed</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>Hosted on your own server</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>100+ third-party integrations</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>Enhanced security settings</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>Fully customizable: fonts, colors, menus, texts, source code, etc.</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>Easily scalable</p></div>
          <div style={{display:"flex"}}><MdCheckCircle></MdCheckCircle> &nbsp;<p>100+ third-party integrations</p></div> <p></p> <br></br></div>
          <button style={{border:"0.5px solid #5CC4FC",borderRadius:"15px",color:"#5CC4FC",padding:"5px 20px 5px 20px"}}><Link to={"/login"}>Learn More</Link></button>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
        <Heading >Ready to try?
        </Heading>
        <br></br>
        <button style={{borderRadius:"10px",backgroundColor:"#c5f420",padding:"10px 40px 10px 40px"}}><Link to={"/login"}>Register Free</Link></button>
      </div>
      <br></br><br></br>

    </div>
  );
};
