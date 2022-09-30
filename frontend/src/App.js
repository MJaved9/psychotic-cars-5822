import { Box } from "@chakra-ui/react";
import TeamMembers from "./pages/TeamMembers";
import Sidebar from "./components/Sidebar";

import Allroutes from "./routes/Allroutes";
function App() {
  return (
    <Box
      className="App"
      display="flex"
      style={{
        background:
          "url('https://b24-1r41i2.bitrix24.com/bitrix/templates/bitrix24/themes/light/atmosphere/atmosphere2.jpg')",
      }}
    >
      {/* <Allroutes /> */}
      <Sidebar />
      <TeamMembers />
    </Box>
  );
}

export default App;
