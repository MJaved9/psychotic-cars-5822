import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import { IoMdSettings } from "react-icons/io";
import TaskHeader from "../Taskheader/TaskHeader";
import TaskSecHeader from "../Taskheader/TaskSecHeader";
import Tasktable from "../TaskTable";

const Main = () => {
  return (
    <div style={{ width:"100%", height: "100vh", padding: "50px",margin:"auto" }}>
      <div>
        {" "}
        <TaskHeader />
      </div>
      <div>
        {" "}
        <TaskSecHeader />
      </div>

      <div>
        <Tasktable />
      </div>
    </div>
  );
};

export default Main;
