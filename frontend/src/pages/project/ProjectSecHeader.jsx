import React from 'react';
import {IoIosStarOutline, IoMdSettings} from "react-icons/io";
import AddTask from '../AddTask/AddTask';
import style from './projectSecHeader.module.css'


import { Box, Divider } from '@chakra-ui/layout';
import { MdFlashOn } from "react-icons/md";
import TaskSerch from '../Taskheader/TaskSerch';
import Projectsearch from './ProjectSearch';
const ProjectSecHeader = () => {
    return  <div className={style.main_div}>

    <div className={style.first_div}>
        <div  className={style.my_task_div}>
            <div> <h1 className={style.h1}>Projects</h1></div>
         <div><IoIosStarOutline className={style.stare_icon} /></div>  
        </div>

        <div >
            <AddTask/>
        </div>
        <div >
           <Projectsearch/>
        </div>
        <div style={{color:"white", height:"50px"}}>
           <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
          <IoMdSettings color="white" size="23px" />
        </Box>
        </div>
        <div style={{color:"white", height:"50px"}}>
        <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
          <MdFlashOn color="white" size="23px" />
        </Box>

        </div>
       
    </div>
    <Divider style={{width:"100%"}}/>
</div>;
}



export default ProjectSecHeader;