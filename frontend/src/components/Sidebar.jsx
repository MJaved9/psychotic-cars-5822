import React from "react";
import {
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      width="15%"
      h="100vh"
      bg="#ffffff4f"
      color="#fff"
      position="sticky"
      top="0px"
    >
      <UnorderedList style={{ listStyle: "none", fontWeight: "600" }}>
        <Stack>
          <ListItem>
            <Flex gap="10px" pt="10px">
              <Text color="#fff" fontSize="35px">
                Bitrix
              </Text>
              <Text color="#2fc6f7" fontSize="35px">
                24
              </Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Link to="/dashboard">Feed</Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/calendar">Calendar</Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/tasks">Tasks & Projects</Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard/teams">Teams</Link>
          </ListItem>
        </Stack>
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
