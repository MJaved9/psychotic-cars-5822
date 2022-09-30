import React from 'react';

import styled from './TaskHeader.module.css'
import { IoIosArrowDown ,IoIosArrowForward} from "react-icons/io";
const TaskHeader = () => {
    return <div className={styled.main_Div}>

<div className={styled.first_Child}>
    <div style={{display:"flex",gap:"10px",marginTop: "1.2%"}}>
        <p className={styled.task_p}>Tasks</p>
        <IoIosArrowForward style={{marginTop:"6px"}}
        />
       
    </div>
    <div style={{marginTop: "1.2%"}}><p className={styled.p}>Projects</p></div>
    <div style={{marginTop: "1.2%"}}><p className={styled.p}>Scrum</p></div>
    <div style={{marginTop: "1.2%"}}><p className={styled.p}> Effieciency</p></div>
    <div style={{display:"flex",gap:'10px',marginTop: "1.2%"}}><p className={styled.p}>More</p>
    < IoIosArrowDown style={{marginTop:"6px"}}/>
    </div>
</div>
    </div>;
}


export default TaskHeader;