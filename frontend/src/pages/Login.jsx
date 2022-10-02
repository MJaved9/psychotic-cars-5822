import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../store/AuthReducer/action";
import loginImg from "./Images/loginImg.png";
import zoom from "./Images/zoom.png";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Divider,
  Text,
  Center,
  Box,
  color,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import {
  FaApple,
  FaTwitterSquare,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdQrCodeScanner } from "react-icons/md";
import styles from "./login.module.css";
import SignupModal from "../components/SignupModal";

export default function UserLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/dashboard/tasks";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        console.log(r);

        if (r === "LOGIN_SUCCESS") {
          localStorage.setItem("email", JSON.stringify(email));
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} bg="#fff">
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={loginImg} />
      </Flex>
      <Flex
        direction={"column"}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        // border={"1px solid black"}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          //   border={"1px solid red"}
          mt={{ md: "-20%", base: "0%" }}
        >
          <Heading fontSize={"4xl"} textAlign={"left"} fontWeight={"normal"}>
            Bitrix24 Login
          </Heading>
          <Divider />
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
            <Text align={"center"}>Don't have an account..? </Text>

            <SignupModal />
          </Stack>
        </Stack>
        <Divider m="10px" />

        <Stack w={"full"} maxW={"xl"} direction={"column"}>
          <Stack
            w={"full"}
            maxW={"xl"}
            border={"1px solid #c4c4c4"}
            direction="row"
            borderRadius="10px"
            backgroundColor={"#f4f7f8"}
            justifyContent={"space-between"}
            height="120px"
            p={6}
          >
            <Button
              w={"300px"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
              // onClick={handleSignIn}
            >
              {/* <Center> */}
              <a href="https://reqres.in/api/register">
                {/* We ca use O OUTH URL Here... */}
                Sign in with Google
              </a>
              {/* </Center> */}
            </Button>
            <Divider orientation="vertical" />
            <Stack>
              <Flex direction={"column"}>
                <Box justifyContent={"center"}>
                  <a href="">
                    <MdQrCodeScanner
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#848b93",
                      }}
                    />
                  </a>
                </Box>
                <Text ml="-5px" fontSize={"13px"} fontWeight="semibold"></Text>
                <Text
                  justifyContent={"center"}
                  fontSize={"13px"}
                  fontWeight="semibold"
                ></Text>
              </Flex>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
