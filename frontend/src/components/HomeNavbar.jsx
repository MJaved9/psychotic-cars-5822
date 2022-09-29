import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styled from './HomeNavbar.module.css'
const Homenavbar = () => {

  return (
    <Box >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"#525C69"}
        align={"center"}
      >
        <div style={{ marginRight: "20px" }}>
         <Link to={"/"}><img
            style={{ width: "170px", height: "50px" }}
            className={styled.img}
            src="data:image/png;base64,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"
            alt="logo"
          /></Link>
        </div>

        <Stack
        className={styled.main}
          flex={{ base: 1, md: 0 }}
          direction={"row"}
          spacing={6}
          mt="2"
          mr="0"
        >
          <Text color="black" fontWeight="600">
            <Link to={'/tools'}> TOOLS </Link>
          </Text>
          <Text color="black" fontWeight="600">
           <Link to={"/pricing"}>PRICING</Link>
          </Text>
          <Text color="black" fontWeight="600">
            <Link to={'/solution'}> SOLUTIONS</Link>
          </Text>
          <Text color="black" fontWeight="600">
           <Link to={'/partners'}>PARTNERS </Link>
          </Text>
          <Text color="black" fontWeight="600">
          <Link to={'/apps'}>APPS </Link>
          </Text>
          <Text color="black" fontWeight="600">
          <Link to={'/blog'}> BLOG </Link>
          </Text>
          <Text color="black" fontWeight="600">
          <Link to={'/support'}>SUPPORT</Link>
          </Text>
          <button
            style={{
              width: "140px",
              height: "35px",
              fontWeight: "500",
              color: "#525C69",
              backgroundColor: "#BDF300",
              marginLeft: "40px",
            }}
          >
           <Link to={'/login'}> Start for free</Link>
          </button>
          <Link to={"/login"}>
            <div
              style={{
                width: "50px",
                display: "flex",
                marginRight: "0px",
                marginLeft: "50px",
              }}
            >
              <Avatar bg="black" size="xs" mt="2" />
              <p style={{ marginLeft: "2px", marginTop: "8px" }}>Login</p>
            </div>
          </Link>
          <div style={{ width: "50px", display: "flex", marginLeft: "40px" }}>
            <EditIcon mt="3" />
            <p style={{ marginLeft: "2px", marginTop: "9px" }}>EN</p>
          </div>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Homenavbar