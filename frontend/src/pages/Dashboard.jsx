import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Main from "./MainTask/Main";
import { RightSlider } from "./rightslider/RightSlider";
import TeamMembers from "./TeamMembers";

const Dashboard = () => {
  return (
    <Flex>
      <Sidebar />
      <Outlet />
      <RightSlider />
    </Flex>
  );
};

export default Dashboard;
