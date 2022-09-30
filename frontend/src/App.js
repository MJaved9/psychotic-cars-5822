
import {Box} from '@chakra-ui/react'
import MainProject from './pages/project/MainProject';
import ProjectSecHeader from './pages/project/ProjectSecHeader';
import TaskHeader from './pages/Taskheader/TaskHeader';
import TaskSecHeader from './pages/Taskheader/TaskSecHeader';

function App() {
  return (
    <Box
    className="App"
    display="flex"
    style={{
      background:
        "url('https://b24-1r41i2.bitrix24.com/bitrix/templates/bitrix24/themes/light/atmosphere/atmosphere2.jpg')",
    }}
  ><MainProject/></Box>

  );
}

export default App;
