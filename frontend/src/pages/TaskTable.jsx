import React, { useEffect, useState } from "react";
import styles from "./AddTask/AddTask.module.css";
import { FaTasks } from "react-icons/fa";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Tag,
  useToast,
  Heading,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
  Input,
  FormLabel,
  Textarea,
  Button,
  useDisclosure,
  Checkbox,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import {  } from "react-redux";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import {
  deleteTask,
  getTask,
  addTask,
  updateTask,
} from "../store/taskAndProject/action";

const email = localStorage.getItem("email");

const TaskTable = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [highPriority, sethighPriority] = useState(false);
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assignedToId, setassignedToId] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [project, setProject] = useState("");
  const [time, setTime] = useState("");
  const [tag, setTag] = useState("");
  const [id, setId] = useState("");
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask(token));
  }, []);

  console.log(tasks, "task");
  const addTaskHandler = () => {
    const updatedTask = {
      title,
      highPriority,
      description,
      creator,
      assignedToId,
      deadline,
      project,
      time,
      tag,
      id,
    };

    // console.log(updatedTask);

    dispatch(updateTask(id, token, updatedTask));
    onClose();
  };
  const handleKeyDown = (e) => {
    // console.log(e.key)
    if (e.key !== "Enter") return;
    console.log(e.target.value);
    const value = e.target.value;
    // if(value.trim()) return
    assignedToId([...assignedToId, value]);
    e.target.value = "";
  };
  const handleDelete = async (id) => {
    // console.log("Delete", id);
    dispatch(deleteTask(id, token)).then((r) => {
      // console.log(r);

      if (r == "Delete_TASK") {
        toast({
          title: "Task Deleted",
          description: "Deleted the task",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };

  const handleEdit = (id) => {
    // console.log("edit", id);

    const target = tasks.filter((el) => {
      return el._id === id;
    });

    // console.log(target[0]);

    onOpen();
    setTitle(target[0].title);
    sethighPriority(target[0].highPriority);
    setDescription(target[0].description);
    setCreator(target[0].creator);
    setassignedToId(target[0].assignedToId);
    setDeadline(target[0].deadline);
    setProject(target[0].project);
    setTime(target[0].time);
    setTag(target[0].tag);
    setId(target[0]._id);
  };

  return (
    <div
      style={{
        background: "#fff",
        height: "350px",
        margin: "50px auto",
        overflowY: "scroll",
      }}
    >
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" backgroundColor={"#f4f7f8"}>
              New task
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Flex justifyContent={"space-between"}>
                  <Input
                    id="title"
                    placeholder="Things to do"
                    width="60%"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Checkbox
                    checked={highPriority}
                    onChange={(e) => {
                      sethighPriority(e.target.checked);
                    }}
                  >
                    Priority
                  </Checkbox>
                </Flex>
                <Box>
                  <FormLabel htmlFor="desc">Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                <Box w="60%" alignItems={"left"}>
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username">Created by</FormLabel>
                    <Input
                      ml="50px"
                      id="creator"
                      placeholder="Add"
                      width="80%"
                      value={creator}
                      onChange={(e) => setCreator(e.target.value)}
                    />
                  </Flex>
                </Box>
                <Box w="80%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel mt="10px">Responsible person</FormLabel>
                    <div className={styles.tagsbox}>
                      {assignedToId.map((tag, index) => (
                        <div key={index} className={styles.tagsitem}>
                          <span className={styles.text}>{tag}</span>
                          <span className={styles.close}>&times;</span>
                        </div>
                      ))}
                      <input
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="+ Add more"
                        className={styles.tagsinput}
                      />
                    </div>
                  </Flex>
                </Box>
                <Box w="60%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username">Deadline</FormLabel>
                    <Input
                      ml={"65px"}
                      type="date"
                      id="deadline"
                      width="80%"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </Flex>
                </Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" width="50%">
                          More
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack spacing={"24px"}>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Project</FormLabel>
                            <Input
                              id="project"
                              placeholder="Add"
                              width="70%"
                              value={project}
                              onChange={(e) => setProject(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="time">Time tracking</FormLabel>
                            <Input
                              type="time"
                              id="time"
                              width="70%"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Tag</FormLabel>
                            <Input
                              id="tag"
                              placeholder="Add"
                              width="70%"
                              value={tag}
                              onChange={(e) => setTag(e.target.value)}
                            />
                          </Flex>
                        </Box>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor={"#bbed21"}
                borderRadius="3px"
                onClick={() => {
                  addTaskHandler();
                }}
              >
                Update Task
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      {tasks.length === 0 ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaTasks style={{ fontSize: "60px", color: "gray" }} />
          <Heading color="gray.500" fontWeight="400" fontSize="25px" pl="20px">
            Tasks Will Display Here
          </Heading>
        </div>
      ) : (
        <TableContainer>
          <Table variant="simple" colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th pl="70px">Name</Th>
                <Th>Active</Th>
                <Th> Deadline</Th>
                <Th> Created by</Th>
                <Th> Responsible person</Th>
                <Th> Tags</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks?.length > 0
                ? tasks?.map((e) => {
                    return (
                      <Tr key={e._id}>
                        <Td>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <IconButton
                              onClick={() => handleEdit(e._id)}
                              icon={<EditIcon />}
                              size="xs"
                            />
                            <IconButton
                              onClick={() => handleDelete(e._id)}
                              icon={<DeleteIcon />}
                              size="xs"
                            />
                            {e.title}
                          </div>
                        </Td>
                        <Td> active</Td>
                        <Td>
                          <Tag
                            backgroundColor="rgb(241,184,59)"
                            color="white"
                            variant="solid"
                          >
                            {e.deadline}
                          </Tag>
                        </Td>
                        <Td>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <FaUserCircle size="20px" />
                            {e.description}
                          </div>
                        </Td>
                        <Td>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <FaUserCircle size="20px" />
                            {e.assignedToId.map((el, index) => {
                              return <p key={index}>{email}</p>;
                            })}
                          </div>
                        </Td>
                        <Td>
                          {/* <Tag
                          backgroundColor="rgb(232,234,239)"
                          color="gray"
                          variant="solid"
                        >
                          {e.deadline} */}
                          {/* </Tag>  */}
                        </Td>
                      </Tr>
                    );
                  })
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default TaskTable;
