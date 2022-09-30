import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Stack,
  Tbody,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Progress,
} from "@chakra-ui/react";
import {
  addTeamMembers,
  deleteTeamMembers,
  getTeamMembers,
} from "../store/TeamMembers/actions";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  email: "",
};

const token = localStorage.getItem("token");

const TeamMembers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [formData, setFormData] = useState(initialState);
  const toast = useToast();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.team.data);
  const loading = useSelector((state) => state.team.get.loading);
  console.log(loading);
  const thStyles = { fontSize: "16px" };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name === "" || formData.email === "") {
      toast({
        title: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(addTeamMembers(token, formData));
    }
  }

  useEffect(() => {
    dispatch(getTeamMembers(token));
  }, []);

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
      <Stack w="100%" h="400px" bg="#fff" overflowY="scroll">
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
          <>
            {loading && <Progress size="lg" isIndeterminate />}
            <Table>
              <Thead>
                <Tr fontWeight="900">
                  <Th style={thStyles}>Name</Th>
                  <Th style={thStyles}>Email</Th>
                  <Th style={thStyles}>Edit</Th>
                  <Th style={thStyles}>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>
                        <Button bg="#3bc8f5" height="47px" borderRadius="100%">
                          <Flex alignItems="center">
                            <MdEdit color="#fff" />
                          </Flex>
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          bg="#3bc8f5"
                          height="47px"
                          onClick={() =>
                            dispatch(deleteTeamMembers(token, item._id))
                          }
                          borderRadius="100%"
                        >
                          <Flex alignItems="center">
                            <MdDelete color="#fff" />
                          </Flex>
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </>
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
            <FormControl isRequired>
              <Input
                placeholder="Name"
                name="name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
              />
              <Input
                m="20px 0"
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
              />
              <Button
                type="submit"
                display="block"
                w="100%"
                bg="#3bc8f5"
                color="#fff"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </Button>
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default TeamMembers;
