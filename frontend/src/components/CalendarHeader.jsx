import React from "react";
import { IoIosStarOutline, IoMdSettings } from "react-icons/io";

import style from "../pages/Taskheader/TaskSecHeader.module.css";
import TaskSerch from "../pages/Taskheader/TaskSerch";
import { FiSettings, FiZap } from "react-icons/fi";
import { Box, Divider } from "@chakra-ui/layout";
import { MdFlashOn } from "react-icons/md";
import AddEventModal from "./AddEventModal";
import { Button,Text } from "@chakra-ui/react";
const CalendarHeader = ({setModalOpen}) => {
  return (
    <div className={style.main_div}>
      <div className={style.first_div}>
        <div className={style.my_task_div}>
          <div style={{ width: "127px" }}>
            {" "}
            <Text className={style.h1}>Calendar</Text>
          </div>
          <div>
            <IoIosStarOutline className={style.stare_icon} />
          </div>
        </div>

        <div>
       
        
          <Button onClick={() => setModalOpen(true)} bg="#bbed21" borderRadius="0px" >New Event </Button>
        </div>
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <TaskSerch />
        </div>
        <div style={{ color: "white", height: "50px" }}>
          <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
            <IoMdSettings color="white" size="23px" />
          </Box>
        </div>
        <div style={{ color: "white", height: "50px" }}>
          <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
            <MdFlashOn color="white" size="23px" />
          </Box>
        </div>
      </div>
      <Divider style={{ width: "100%", paddingTop: "20px" }} />
    </div>
  );
};

export default CalendarHeader;
