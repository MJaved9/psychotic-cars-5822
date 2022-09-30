import React, { useRef, useState } from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  Text,
  transform,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import { FaFlag, FaPen, FaRocket } from "react-icons/fa";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const DashboardNavbar = () => {
  // const [show,setShow]=useState(false)
  const timeRef = useRef(null);

  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + " " + ampm;

  const userImage = "https://i.imgur.com/DAn3fJr.png";
  const userName = "userName";

  function handleHide() {
    timeRef.current.style.display = "none";
  }

  return (
    <Box w="100%" color="white" bg="none" m="auto">
      <Flex
      w="70%"
        border="1px solid red"
        gap="20px"
        alignItems="center"
        m="auto"
        h="63px"
      >
        {/* edit icon */}
        <Box>
          {" "}
          <FaPen />
        </Box>

        {/*search bar  */}

        <Box>
          <InputGroup size="xs">
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" fontSize="15px" />}
              size="sm"
            />
            <Input
              variant="outline"
              borderRadius={"20px"}
              size="xs"
              display={"flex"}
              alignItems="center"
              placeholder={`find people, documents, and more `}
              border="none"
              p="15px"
              _focus={{
                w: "400px",
                bg: "white",
                color: "black",
              }}
              onFocus={handleHide}
            />
          </InputGroup>
        </Box>

        {/* Time div */}

        <Box bg="none" ref={timeRef}>
          <Button
            display={"flex"}
            bg="transparent"
            gap="20px"
            alignItems={"center"}
            h="55px"
            pr="120px"
            _hover={{
              bg: "#4e6e99",
            }}
          >
            <Text fontSize={"21px"}>{strTime}</Text>
            <FaFlag fontSize={"10px"} />
          </Button>
        </Box>

        {/* profile div */}
        <Box bg="none">
          <Button
            display={"flex"}
            bg="transparent"
            gap="20px"
            alignItems={"center"}
            h="55px"
            p="10px"
            _hover={{
              bg: "#4e6e99",
            }}
          >
            <Image
              src={userImage}
              alt="user"
              w="40px"
              h="40px"
              borderRadius="50%"
            />
            <Text>{userName}</Text>
            <ChevronDownIcon />
          </Button>
        </Box>

        {/* upgrade */}
        <Box>
          <Button
            bg="#eba51c"
            borderRadius={"20px"}
            size="sm"
            p="10px"
            pt="10px"
            display={"flex"}
            gap="10px"
            alignItems="center"
            _hover={{
              bg: "#eba51c",
            }}
          >
            <Box borderRadius="50%" border=".5px solid white" p="3px">
              <FaRocket bg="rgba(255,255,255,.3)" />
            </Box>
            <Text>upgrade</Text>
            <ChevronDownIcon />
          </Button>
        </Box>

        {/* invite */}

        <Popover>
          <PopoverTrigger>
           
              <Box>
                <Button
                  bg="#14bfd5"
                  borderRadius={"20px"}
                  size="sm"
                  p="0px 20px 0px 15px"
                  display={"flex"}
                  gap="10px"
                  _hover={{
                    bg: "#14bfd5",
                  }}
                >
                  <Text>invite</Text>
                  <ChevronDownIcon />
                </Button>
              </Box>
           
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
       
            <PopoverBody>
             
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

export default DashboardNavbar;
