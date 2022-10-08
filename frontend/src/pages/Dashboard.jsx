import { Flex,Box } from "@chakra-ui/react";
import React from "react";
import { Outlet, Route } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import Main from "./MainTask/Main";
import { RightSlider } from "./rightslider/RightSlider";
import TeamMembers from "./TeamMembers";

const Dashboard = () => {
  return (
    <Flex w="100%">
       <Sidebar />
       <Flex direction="column" w="100%">
      <DashboardNavbar />
      <Outlet />
      </Flex>
   
     
      
      <RightSlider  />
    
    </Flex>
    
  );
};

export default Dashboard;
