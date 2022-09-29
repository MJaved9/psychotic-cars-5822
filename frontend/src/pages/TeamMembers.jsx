import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const TeamMembers = () => {
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Stack w="80%" p="50px">
      <Flex
        justifyContent="space-between"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="gray.200"
        p="20px 0"
        mb="30px"
      >
        <Box>
          <Heading color="gray.100" fontWeight="400" fontSize="25px">
            Workgroups and projects
          </Heading>
        </Box>
        <Flex w="50%">
          <Input
            w="100%"
            display="block"
            bg="#fff"
            placeholder="Search"
            borderTopRightRadius="0px"
            borderBottomRightRadius="0px"
          />
          <Button
            borderBottomLeftRadius="0px"
            borderTopLeftRadius="0px"
            bg="#3bc8f5"
          >
            <BiSearchAlt2 color="#fff" w="25px" />
          </Button>
        </Flex>
        <Box>
          <Button bg="#3bc8f5" w="150px" ref={btnRef} onClick={onOpen}>
            <Flex alignItems="center">
              <BsPlus
                style={{ color: "#fff", fontSize: "25px", fontWeight: "600" }}
              />
              <Text color="#fff">Create</Text>
            </Flex>
          </Button>
        </Box>
      </Flex>
      <Stack borderRadius="20px" w="100%" h="400px" bg="#fff">
        {data.length === 0 ? (
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            h="100%"
            gap="20px"
          >
            <HiUsers fontSize="80px" color="gray" />
            <Heading color="gray.500" fontWeight="400" fontSize="25px">
              Team Members Will Display Here
            </Heading>
          </Flex>
        ) : (
          <Text>yes</Text>
        )}
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Team Member</DrawerHeader>

          <DrawerBody>
            <form>
              <Input placeholder="Name" required />
              <Input m="20px 0" placeholder="Email" required />
              <Button
                type="submit"
                display="block"
                w="100%"
                bg="#3bc8f5"
                color="#fff"
              >
                Submit
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default TeamMembers;
