import { Box } from "@chakra-ui/react";
import { Pricing } from "./pages/Pricing";

import Allroutes from "./routes/Allroutes";
function App() {
  return (
    <Box
      className="App"
      display="flex"
      // style={{
      //   background:
      //     "url('https://b24-1r41i2.bitrix24.com/bitrix/templates/bitrix24/themes/light/atmosphere/atmosphere2.jpg')",
      // }}
    >
      {/* <Allroutes /> */}
      <Pricing />
    </Box>
  );
}

export default App;
