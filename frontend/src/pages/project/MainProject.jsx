import React from 'react';
import TaskHeader from '../Taskheader/TaskHeader';
import ProjectSecHeader from './ProjectSecHeader';

const MainProject = () => {
    return <div style={{width:"100%"}}> 
        <div><TaskHeader/></div>
        <div>
            <ProjectSecHeader/>
        </div>
        <div></div>
    </div>;
}


export default MainProject;