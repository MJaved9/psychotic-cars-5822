import { Box, Divider } from '@chakra-ui/layout';
import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import TaskHeader from '../Taskheader/TaskHeader';
import TaskSecHeader from '../Taskheader/TaskSecHeader';
import { Tasktable } from '../TaskTable';

const Main = () => {
    return <div style={{width:"100%"}}>
       <div> <TaskHeader/></div>
      <div>  <TaskSecHeader/></div>
      
      <div><Tasktable/></div>
    </div>;
}


export default Main;